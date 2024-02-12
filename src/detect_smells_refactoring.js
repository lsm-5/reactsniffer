const fs = require('fs');
const domElements = require('./utils/dom_elements');
const readFiles = require('./utils/read_files');
const {get_empirical_thresholds} = require("./thresholds");

function updateComponent(addObject, componentCurrent, attrName, result){
	// const newComponent = {...componentCurrent, [attrName]: [...componentCurrent[attrName], addObject]}
	const indexItem = result.components.findIndex(currentComponent => currentComponent.name === componentCurrent.name)
	const newComponent = {...result.components[indexItem], [attrName]: [...componentCurrent[attrName], addObject]}
	if(indexItem >= 0){
		result.components[indexItem] = newComponent;
	}
	componentCurrent[attrName] = [...componentCurrent[attrName], addObject]
}

function checkPropInInitialState(item, component, parents, result) {
	if(item?.object?.name === "props" || item?.property?.name === "props"){
		// type MemberExpression
		const lines = readFiles.get_lines(component.file_url, item.object.loc.start.line, item.object.loc.end.line);

		// checa se não tem uma tag na mesma linha
		let checkIsJSX = false
		for (const item of parents.slice().reverse()) {
			if(item.type === "MemberExpression") continue;
			if(item.type === "JSXExpressionContainer") checkIsJSX=true;
			//if(item.type === "ObjectProperty") checkIsJSX=true;
			else break
		}
		if(!checkIsJSX){
			const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)
			const propsInitialState = {
				lineStart: item.object.loc.start.line,
				lineEnd: item.object.loc.end.line,
				line: lines,
				smellString: string,
			};

			updateComponent(propsInitialState, component, "propsInitialState", result)
		}
	}
	else if (item?.arguments && Array.isArray(item.arguments)) {
		item.arguments.forEach(argument => {
			if (component.properties.includes(argument?.name)) {
				const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

				const propsInitialState = {
					lineStart: item.loc.start.line,
					lineEnd: item.loc.end.line,
					line: readFiles.get_lines(component.file_url, item.loc.start.line, item.loc.end.line),
					smellString: string,
				};

				updateComponent(propsInitialState, component, "propsInitialState", result)
			}
		});
	}
	// todo: precisa ser verificado se precisa de um detector no constructor que não seja um MemberExpression
	/*else if (item.kind === 'constructor'){
		const params = item.params.map((param) => param.name);
		for (const expression of item.body.body) {
			if (hasPropsInitialState(expression, params)) {
				const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

				const propsInitialState = {
					lineStart: expression.loc.start.line,
					lineEnd: expression.loc.end.line,
					line: readFiles.get_lines(component.file_url, expression.loc.start.line, expression.loc.end.line),
					smellString: string,
				};

				component.propsInitialState.push(propsInitialState);
			}
		}
	}*/
	else if (item?.consequent?.name === "props" || item?.alternate?.name === "props"){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

		const propsInitialState = {
			lineStart: item.loc.start.line,
			lineEnd: item.loc.end.line,
			line: readFiles.get_lines(component.file_url, item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(propsInitialState, component, "propsInitialState", result)
	}
}

function updateComponentData(item, component) {
	component.type = item.type
	component.name = item.id ? item.id.name : 'no-name'
	component.char = item.end - item.start + 1
	component.loc = item.loc.end.line - item.loc.start.line + 1

	if (item.type === 'ClassDeclaration' && item.superClass && 'name' in item.superClass && item.superClass.name !== 'PureComponent' && item.superClass.name !== 'Component') {
		component.superClass = item.superClass.name;
	}
}

function checkFunctionData(item, result, component) {
	let functionName;

	if (item.type === 'FunctionDeclaration') {
		functionName = item.id ? item.id.name : 'Noname';
	} else {
		// item.type === 'VariableDeclaration' && item.declarations[0].init && item.declarations[0].init.type === 'ArrowFunctionExpression'
		functionName = item.declarations[0].id.name;
	}

	if (!('name' in component)) {
		result.functions.push(functionName);
	} else {
		updateComponent(functionName, component, "functions", result)
	}
}

function checkClassMethodData(item, component, result) {
	if(item?.key?.name){
		updateComponent(item.key.name, component,"classMethods", result)
	}
}

function checkObjectPropertyData(item, component, result, parents) {
	if ('name' in item.key && !component.properties.includes(item.key.name)) {
		const sliceParents = parents.slice(-6)
		sliceParents.forEach(current => {
			if(current.type === "FunctionDeclaration" || current.type === "VariableDeclarator"){
				updateComponent(item.key.name, component, "properties", result)
			}
		})
	}
}

function checkJSXElementData(item, component, parents, result) {
	if (component.classMethods.length > 0 ){
		const componentsOutside = component.classMethods.filter(item => item !== "render");
		const newComponentOutside = componentsOutside.filter(elemento => !component.JSXOutsideRender.includes(elemento));
		if(newComponentOutside.length > 0){
			updateComponent(newComponentOutside[0], component, "JSXOutsideRender", result)
		}
	} else {
		for (let i = parents.length - 1; i >= 0; i--) {
			if(parents[i]?.type === "VariableDeclarator" || parents[i]?.type === "FunctionDeclaration"){
				if(parents[i]?.id?.name !== component.name){
					const indexFather = result.components.findIndex(itemCurrent => itemCurrent.name === parents[i]?.id?.name)
					if (!result.components[indexFather].JSXOutsideRender.includes(component.name)){
						result.components[indexFather] = {...result.components[indexFather], JSXOutsideRender: [...result.components[indexFather].JSXOutsideRender, component.name]}
					}
				}
			}
		}
	}

}

function updateImportData(item, result) {
	item.specifiers.forEach(current => {
		result.imports.push({"item": current.local.name, "local": item.source.value});
	})
}

function checkCalleeData(value, component, result) {
	if (value.property && value.property.name) {
		if (value.property.name === 'forceUpdate' || value.property.name === 'reload') {
			const forceUpdate = {
				lineNumber: value.loc.start.line,
				line: readFiles.get_line(component.file_url, value.loc.start.line),
			};

			updateComponent(forceUpdate, component, 'forceUpdate', result)
		}
	}
}

function checkInputData(item, component, result) {
	let hasRefAttribute = false;
	let hasValueAttribute = false;

	if (item.attributes) {
		for (const attr of item.attributes) {
			if (attr.name && attr.name.type === 'JSXIdentifier') {
				if (attr.name.name === 'ref') {
					hasRefAttribute = true;
				} else if (attr.name.name === 'value') {
					hasValueAttribute = true;
				}
			}
		}

		if (hasRefAttribute && !hasValueAttribute) {
			const uncontrolled = {
				lineNumber: value.loc.start.line,
				line: readFiles.get_line(component.file_url, value.loc.start.line),
			};

			updateComponent(uncontrolled, component, 'uncontrolled', result)
		}
	}
}

function checkClassPropertyData(item, component, result) {
	if (item.value && item.value.type === 'ArrowFunctionExpression') {
		updateComponent(item.key.name, component, 'classMethods', result)
	} else {
		updateComponent(item.key.name, component, 'classProperties', result)
	}
}

function checkProcessProperty(item, component, name, result) {
	if (
		(item.object && item.object.name && item.object.name === 'props') ||
		(item.object.property && item.object.property.name && item.object.property.name === 'props')
	) {
		updateComponent(name, component, 'properties', result)
	}
}

function checkAttributesJSXArrayIndexKey(attributes, indexName, component, result){
	attributes.forEach(attribute => {
		if(attribute?.type === "JSXAttribute" && attribute?.name?.name === "key" && attribute.value.expression.name === indexName){
			const string = readFiles.getStringBetweenIndexes(component.file_url, attribute.value.expression.loc.start.index, attribute.value.expression.loc.end.index-1)

			const arrayIndexKey = {
				lineStart: attribute.value.expression.loc.start.line,
				lineEnd: attribute.value.expression.loc.end.line,
				line: readFiles.get_lines(component.file_url, attribute.value.expression.loc.start.line, attribute.value.expression.loc.end.line),
				smellString: string,
			};
			updateComponent(arrayIndexKey, component, "arrayIndexKey", result)

		} else if(attribute?.type === "JSXAttribute" && attribute?.name?.name === "key" && attribute?.value?.expression?.type === "TemplateLiteral"){
			attribute?.value?.expression?.expressions.forEach(currentItem => {
				if(currentItem.name === indexName){
					const string = readFiles.getStringBetweenIndexes(component.file_url, currentItem.start, attribute.end-1)

					const arrayIndexKey = {
						lineStart: currentItem.loc.start.line,
						lineEnd: currentItem.loc.end.line,
						line: readFiles.get_lines(component.file_url, currentItem.loc.start.line, currentItem.loc.end.line),
						smellString: string,
					};

					updateComponent(arrayIndexKey, component, "arrayIndexKey", result)
				}
			})
		}
	})
}

function checkPropertiesArrayIndexKey(properties, indexName, component, result){
	properties.forEach(propertie => {
		if(propertie?.type === "ObjectProperty" && propertie?.key?.name === "key" && propertie?.value?.name === indexName){
			const string = readFiles.getStringBetweenIndexes(component.file_url, propertie.value.start, propertie.value.end-1)

			const arrayIndexKey = {
				lineStart: propertie.value.loc.start.line,
				lineEnd: propertie.value.loc.end.line,
				line: readFiles.get_lines(component.file_url, propertie.value.loc.start.line, propertie.value.loc.end.line),
				smellString: string,
			};

			updateComponent(arrayIndexKey, component, "arrayIndexKey", result)
		}
	})
}

function checkArrayIndexKey(item, component, result) {
	const typeArray = item?.callee?.property?.name;
	item?.arguments?.forEach(argument => {
		if (argument?.type === "ArrowFunctionExpression" && argument?.params.length > 1){
			let indexName = undefined;
			if (typeArray === "reduce" || typeArray === "reduceRight"){
				indexName = argument?.params[2]?.name
			} else if (typeArray==="find" || typeArray==="map" || typeArray==="flatMap" || typeArray==="filter" || typeArray==="some" || typeArray==="every" || typeArray==="findIndex" ) {
				indexName = argument?.params[1]?.name
			}

			if(indexName === undefined){
				return
			}

			if(argument?.body?.type === "JSXElement"){
				checkAttributesJSXArrayIndexKey(argument?.body?.openingElement?.attributes, indexName, component, result)
			} else if(argument?.body?.type === "CallExpression"){
				argument?.body?.arguments.forEach(currentItem => {
					if(currentItem?.type === "JSXElement"){
						checkAttributesJSXArrayIndexKey(currentItem?.openingElement?.attributes, indexName, component, result)
					} else if(currentItem?.type === "ObjectExpression"){
						checkPropertiesArrayIndexKey(currentItem?.properties, indexName, component, result)
					}
				})
			} else if(argument?.body?.type === "BlockStatement"){
				argument?.body?.body?.forEach(currentItem => {
					if(currentItem?.type === "ReturnStatement" && currentItem?.argument?.type === "CallExpression"){
						currentItem?.argument?.arguments?.forEach(argumentItem => {
							if(argumentItem?.type === "ObjectExpression"){
								checkPropertiesArrayIndexKey(argumentItem?.properties, indexName, component, result)
							}
						})
					} else if(currentItem?.type === "ExpressionStatement" && currentItem?.expression?.type === "CallExpression"){
						currentItem?.expression?.arguments.forEach(currentArgument => {
							if(currentArgument?.type === "JSXElement"){
								checkAttributesJSXArrayIndexKey(currentArgument?.openingElement?.attributes, indexName, component, result)
							}
						})
					}
				})
			}
		}
	})
}

function checkPropDrilling(item, component, parents, result){
	const openingElement = parents.reverse().find(parentItem => parentItem?.keyParent === "openingElement")
	if(openingElement?.name?.name !== undefined && openingElement?.name?.name?.charAt(0) === openingElement?.name?.name?.charAt(0).toUpperCase() && item?.value?.type === "JSXExpressionContainer"){
		const originImport = result.imports.find(current => current.item === openingElement.name.name)
		if(originImport !== undefined && originImport.local.includes("./")){
			if(item?.value?.expression?.type === "Identifier"){
				if(component.properties.includes(item.value.expression.name)){
					const string = readFiles.getStringBetweenIndexes(component.file_url, item.value.expression.start, item.value.expression.end-1)
					const propDrilling = {
						lineStart: item.value.expression.loc.start.line,
						lineEnd:item.value.expression.loc.end.line,
						line: readFiles.get_lines(component.file_url,  item.value.expression.loc.start.line, item.value.expression.loc.end.line),
						smellString: string,
					}

					updateComponent(propDrilling, component, "propDrilling", result)
				}
			} else if(item?.value?.expression?.type === "ObjectExpression"){
				if(component.properties.includes(item.value.expression.properties[0]?.argument?.name)){
					const string = readFiles.getStringBetweenIndexes(component.file_url, item.value.expression.start, item.value.expression.end-1)
					const propDrilling = {
						lineStart: item.value.expression.loc.start.line,
						lineEnd:item.value.expression.loc.end.line,
						line: readFiles.get_lines(component.file_url,  item.value.expression.loc.start.line, item.value.expression.loc.end.line),
						smellString: string,
					}

					updateComponent(propDrilling, component, "propDrilling", result)

				}
			} else if(item?.value?.expression?.type === "ConditionalExpression"){
				if(component.properties.includes(item.value.expression.consequent.name) || component.properties.includes(item.value.expression.alternate.name)){
					const string = readFiles.getStringBetweenIndexes(component.file_url, item.value.expression.start, item.value.expression.end-1)
					const propDrilling = {
						lineStart: item.value.expression.loc.start.line,
						lineEnd:item.value.expression.loc.end.line,
						line: readFiles.get_lines(component.file_url,  item.value.expression.loc.start.line, item.value.expression.loc.end.line),
						smellString: string,
					}
					updateComponent(propDrilling, component, "propDrilling", result)
				}
			}
		}
	}
}

function checkUseState(item, component, result){
	if(item?.type === "Identifier" && item?.name === "useState"){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)
		const useState = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		}
		updateComponent(useState, component, 'useState', result)
	}
}

function checkDOMManipulation(item, component, result){
	if (item?.object?.name === 'document' || item?.object?.name === 'element') {
		if (domElements().includes(item?.property?.name)) {
			const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

			const domManipulation = {
				lineStart: item.loc.start.line,
				lineEnd:item.loc.end.line,
				line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
				smellString: string,
			};

			updateComponent(domManipulation, component, "domManipulation", result)
		}
	} else if(item?.type === "Identifier" && domElements().includes(item?.name)){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)
		const domManipulation = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(domManipulation, component, "domManipulation", result)
	}
}

function checkPropsSpreading(item, component, result){
	if(item?.argument?.name){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

		const propsSpreading = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(propsSpreading, component, "propsSpreading", result)
	}
}

function checkDeepIndentation(item, component, result){
	if(item?.consequent?.type === "ConditionalExpression" || item?.alternate?.type === "ConditionalExpression"){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

		const deepIndentation = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(deepIndentation, component, "deepIndentation", result)
	}
}

function checkLargeUseEffect(item, component, result){
	if(item?.callee?.type === 'Identifier' && item?.callee?.name === 'useEffect' && item.arguments[0].body.body.length > get_empirical_thresholds()['N_useEffect']){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

		const largeUseEffect = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(largeUseEffect, component, "largeUseEffect", result)
	}
}

function checkMutableVariables(item, component, result){
	if(item?.kind === 'let' || item?.kind === 'var'){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

		const mutableVariables = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(mutableVariables, component, "mutableVariables", result)
	}
}

function checkProceduralPatterns(item, component, result){
	const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

	const proceduralPatterns = {
		lineStart: item.loc.start.line,
		lineEnd:item.loc.end.line,
		line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
		smellString: string,
	};

	updateComponent(proceduralPatterns, component, "proceduralPatterns", result)

}

function checkStringLiterals(item, component, result){
	if(item?.left?.type === "StringLiteral" || item?.right?.type === "StringLiteral"){
		const string = readFiles.getStringBetweenIndexes(component.file_url, item.start, item.end-1)

		const stringLiterals = {
			lineStart: item.loc.start.line,
			lineEnd:item.loc.end.line,
			line: readFiles.get_lines(component.file_url,  item.loc.start.line, item.loc.end.line),
			smellString: string,
		};

		updateComponent(stringLiterals, component, "stringLiterals", result)
	}
}

function checkWordPrevState(item, world, resultObj, fileURL){
	if(item?.type === 'Identifier'){
		if(item.name.toLowerCase() === world.toLowerCase()){
			resultObj.result = true;
			const string = readFiles.getStringBetweenIndexes(fileURL, item.start, item.end-1)

			resultObj.component = {
				lineStart: item.loc.start.line,
				lineEnd:item.loc.end.line,
				line: readFiles.get_lines(fileURL, item.loc.start.line, item.loc.end.line),
				smellString: string,
			}

		}
	} else if(item?.type === "BinaryExpression" || item?.type === "LogicalExpression"){
		checkWordPrevState(item?.left, world, resultObj, fileURL)
		checkWordPrevState(item?.right, world, resultObj, fileURL)
	} else if(item?.type === "UnaryExpression"){
		checkWordPrevState(item?.argument, world, resultObj, fileURL)
	}
}

function checkPrevState(item, component, result){
	if(item?.callee?.type === "Identifier" && item?.callee?.name.substring(0, 3) === 'set'){
		const restWord = item?.callee?.name.substring(3)
		const resultObj = { result: false, component: null };
		for (const arg of item?.arguments) {
			checkWordPrevState(arg, restWord, resultObj, component.file_url)
		}
		if(resultObj.result){
			updateComponent(resultObj.result, component, 'prevState', result)
		}
	}
}

function identifierCurrentComponent(component, result, parents){
	// atualiza quem é o component atual
	if (result.components.length > 0 && component?.name !== undefined) {
		for (let i = parents.length - 1; i >= 0; i--) {
			if ((parents[i].type === 'ClassDeclaration' || parents[i].type === 'FunctionDeclaration') && parents[i]?.id?.name[0] === parents[i]?.id?.name[0].toUpperCase()) {
				if (component.name === parents[i].id ? parents[i].id.name : 'no-name') {
					break
				} else {
					const currentComponent = result.components.find(component => component?.name === parents[i].id ? parents[i].id.name : 'no-name')
					if (currentComponent) {
						component = currentComponent
						break
					} else {
						break
					}
				}
			} else if (parents[i]?.type === 'VariableDeclaration' && parents[i]?.declarations[0]?.init?.type === 'ArrowFunctionExpression' && parents[i]?.declarations[0]?.id?.name[0] === parents[i]?.declarations[0]?.id?.name[0].toUpperCase()) {
				if (component.name === parents[i].declarations[0].id.name) {
					break
				} else {
					const currentComponent = result.components.find(component => component?.name === parents[i]?.declarations[0]?.id?.name)
					if (currentComponent) {
						component = currentComponent
						break
					} else {
						break
					}
				}
			}
		}
	}
}

function recursiveSearch(item, result, component, parents) {
	if (!item) {
		return;
	}

	for (const [key, value] of Object.entries(item)) {
		if (!value) {
			continue;
		} else if (key === 'type') {
			identifierCurrentComponent(component, result, parents)

			if ((value === 'ClassDeclaration' || value === 'FunctionDeclaration') && item?.id?.name[0] === item?.id?.name[0].toUpperCase()) {
				const newComponent = {...component}
				updateComponentData(item, newComponent)
				result.components.push(newComponent);
				component = newComponent
				parents = [...parents, item]
			} else if (value === 'VariableDeclaration' && item?.declarations[0]?.init?.type === 'ArrowFunctionExpression' && item.declarations[0].id.name[0] === item.declarations[0].id.name[0].toUpperCase()) {
				const arrowFunction = item.declarations[0].init;
				const newComponent = {...component}
				updateComponentData(arrowFunction, newComponent);
				newComponent.name = item.declarations[0].id.name; // Adição da linha para atribuir o nome do componente
				result.components.push(newComponent);
				component = newComponent
				parents = [...parents, item]
			} else if (value === 'FunctionDeclaration' || (value === 'VariableDeclaration' && item.declarations[0].init && item.declarations[0].init.type === 'ArrowFunctionExpression')) {
				checkFunctionData(item, result, component);
			} else if (value === 'ClassProperty') {
				checkClassPropertyData(item, component, result);
			} else if (value === 'ClassMethod') {
				checkPropInInitialState(item, component, parents, result)
				checkClassMethodData(item, component, result);
			} else if (value === 'ObjectProperty') {
				checkObjectPropertyData(item, component, result, parents);
			} else if (value === 'JSXElement') {
				checkJSXElementData(item, component, parents, result);
			} else if (value === "ImportDeclaration"){
				updateImportData(item, result);
			} else if(value === "MemberExpression") {
				checkPropInInitialState(item, component, parents, result)
			} else if(value === "CallExpression"){
				checkPropInInitialState(item, component, parents, result)
				checkArrayIndexKey(item, component, result)
				checkPrevState(item, component, result)
				checkLargeUseEffect(item, component, result)
			} else if(value === "ConditionalExpression"){
				checkPropInInitialState(item, component, parents, result)
				checkDeepIndentation(item, component, result)
			} else if(value === "JSXAttribute"){
				checkPropDrilling(item, component, parents, result)
			} else if(value === "Identifier"){
				checkDOMManipulation(item, component, result)
			} else if(value === "JSXSpreadAttribute"){
				checkPropsSpreading(item, component, result)
			} else if(value === "VariableDeclaration"){
				checkMutableVariables(item, component, result)
			} else if(value === "ForStatement") {
				checkProceduralPatterns(item, component, result)
			} else if(value === "BinaryExpression"){
				checkStringLiterals(item, component, result)
			}
		} else if (key === 'property' && !component.properties.includes(value.name)) {
			checkProcessProperty(item, component, value.name, result);
		} else if (key === 'callee') {
			checkUseState(value, component, result, parents)
			checkCalleeData(value, component, result);
			checkDOMManipulation(value, component, result)
		} else if (key === 'name' && value.name === 'input') {
			checkInputData(item, component, result);
		} else if (typeof value === 'object') {
			recursiveSearch(value, result, component, [...parents, {keyParent: key, ...value}]);
		}
	}
}

function processAST(ast) {
	const result = {
		components: [],
		functions: [],
		imports: []
	};

	for (const [, value] of Object.entries(ast.program.body)) {
		const component = {
			file: ast['url'].substring(ast['url'].lastIndexOf('/')+1),
			file_url: ast['url'],
			properties : [],
			forceUpdate : [],
			uncontrolled : [],
			classProperties : [],
			classMethods : [],
			JSXOutsideRender : [],
			propsInitialState : [],
			domManipulation : [],
			functions: [],
			superClass: 'no-name',
			type: 'no-type',
			name: 'no-name',
			char: 0,
			loc: 0,
			arrayIndexKey: [],
			propDrilling: [],
			useState: [],
			propsSpreading: [],
			deepIndentation: [],
			mutableVariables: [],
			proceduralPatterns: [],
			stringLiterals: [],
			largeUseEffect: [],
			prevState: [],
		}

		recursiveSearch(value, result, component, [{keyParent: "Program", ...ast.program}]);
	}

	return result;
}

module.exports = processAST;
