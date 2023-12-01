const fs = require('fs');
const domElements = require('./utils/dom_elements');
const readFiles = require('./utils/read_files');

// todo: colocar pra o result entender os imports aqui e as functions aqui tbm

function hasPropsInitialState(item, params) {
	for (const [key, value] of Object.entries(item)) {
		if (key === 'type' && item.expression && item.expression.left && item.expression.right) {
			if (
				item.expression.left.property &&
				item.expression.left.property.name === 'state' &&
				item.expression.right.properties
			) {
				for (const prop of item.expression.right.properties) {
					if (prop.value && prop.value.object && params.includes(prop.value.object.name)) {
						return true;
					}
				}
			}
		}
	}
	return false;
}

function updateComponentPropInInitialState(item, component, parents) {
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

			component.propsInitialState.push(propsInitialState);

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

				component.propsInitialState.push(propsInitialState);
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

		component.propsInitialState.push(propsInitialState);

	}

}

function updateComponentData(item, component) {
	component.type = item.type
	component.name =item.id ? item.id.name : 'no-name'
	component.char = item.end - item.start + 1
	component.loc = item.loc.end.line - item.loc.start.line + 1

	if (item.type === 'ClassDeclaration' && item.superClass && 'name' in item.superClass && item.superClass.name !== 'PureComponent' && item.superClass.name !== 'Component') {
		component.superClass = item.superClass.name;
	}
}

function updateFunctionData(item, result, component) {
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
		component.functions.push(functionName);
	}
}

function updateClassMethodData(item, component) {
	if (item.key.name !== 'render') {
		component.classMethods.push(item.key.name);
	}
}

function updateObjectPropertyData(item, component) {
	if ('name' in item.key && !component.properties.includes(item.key.name)) {
		component.properties.push(item.key.name);
	}
}

function updateJSXElementData(component) {
	component.JSXOutsideRender = component.classMethods;
}

function updateImportData(item, result) {
	result.imports.push(item.local.name);
}

function updateCalleeData(value, component) {
	if (value.property && value.property.name) {
		if (value.property.name === 'forceUpdate' || value.property.name === 'reload') {
			const forceUpdate = {
				lineNumber: value.loc.start.line,
				line: readFiles.get_line(component.file_url, value.loc.start.line),
			};

			component.forceUpdate.push(forceUpdate);
		} else if (value.object.name && (value.object.name === 'document' || value.object.name === 'element')) {
			if (domElements().includes(value.property.name)) {
				const domManipulation = {
					lineNumber: value.loc.start.line,
					line: readFiles.get_line(component.file_url, value.loc.start.line),
				};
				component.domManipulation.push(domManipulation);
			}
		}
	}
}

function updateInputData(item, component) {
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

			component.uncontrolled.push(uncontrolled);
		}
	}
}

function updateClassPropertyData(item, component) {
	if (item.value && item.value.type === 'ArrowFunctionExpression') {
		component.classMethods.push(item.key.name);
	} else {
		component.classProperties.push(item.key.name);
	}
}

function updateProcessProperty(item, component, name) {
	if (
		(item.object && item.object.name && item.object.name === 'props') ||
		(item.object.property && item.object.property.name && item.object.property.name === 'props')
	) {
		component.properties.push(name);
	}
}

function checkAttributesJSXArrayIndexKey(attributes, indexName, component){
	attributes.forEach(attribute => {
		if(attribute?.type === "JSXAttribute" && attribute?.name?.name === "key" && attribute.value.expression.name === indexName){
			const string = readFiles.getStringBetweenIndexes(component.file_url, attribute.value.expression.loc.start.index, attribute.value.expression.loc.end.index-1)

			const arrayIndexKey = {
				lineStart: attribute.value.expression.loc.start.line,
				lineEnd: attribute.value.expression.loc.end.line,
				line: readFiles.get_lines(component.file_url, attribute.value.expression.loc.start.line, attribute.value.expression.loc.end.line),
				smellString: string,
			};

			component.arrayIndexKey.push(arrayIndexKey);
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

					component.arrayIndexKey.push(arrayIndexKey);
				}
			})
		}
	})
}

function checkPropertiesArrayIndexKey(properties, indexName, component){
	properties.forEach(propertie => {
		if(propertie?.type === "ObjectProperty" && propertie?.key?.name === "key" && propertie?.value?.name === indexName){
			const string = readFiles.getStringBetweenIndexes(component.file_url, propertie.value.start, propertie.value.end-1)

			const arrayIndexKey = {
				lineStart: propertie.value.loc.start.line,
				lineEnd: propertie.value.loc.end.line,
				line: readFiles.get_lines(component.file_url, propertie.value.loc.start.line, propertie.value.loc.end.line),
				smellString: string,
			};

			component.arrayIndexKey.push(arrayIndexKey);
		}
	})
}

function updateComponentArrayIndexKey(item, component, parents) {
	const typeArray = item?.callee?.property?.name;
	item?.arguments?.forEach(argument => {
		if (argument?.type === "ArrowFunctionExpression" && argument?.params.length > 1){
			let indexName = undefined;
			if (typeArray === "reduce" || typeArray === "reduceRight"){
				indexName = argument?.params[2]?.name
			} else if (typeArray=="find" || typeArray=="map" || typeArray=="flatMap" || typeArray=="filter" || typeArray=="some" || typeArray=="every" || typeArray=="findIndex" ) {
				indexName = argument?.params[1]?.name
			}

			if(indexName === undefined){
				return
			}

			if(argument?.body?.type === "JSXElement"){
				checkAttributesJSXArrayIndexKey(argument?.body?.openingElement?.attributes, indexName, component)
			} else if(argument?.body?.type === "CallExpression"){
				argument?.body?.arguments.forEach(currentItem => {
					if(currentItem?.type === "JSXElement"){
						checkAttributesJSXArrayIndexKey(currentItem?.openingElement?.attributes, indexName, component)
					} else if(currentItem?.type === "ObjectExpression"){
						checkPropertiesArrayIndexKey(currentItem?.properties, indexName, component)
					}
				})
			} else if(argument?.body?.type === "BlockStatement"){
				argument?.body?.body?.forEach(currentItem => {
					if(currentItem?.type === "ReturnStatement" && currentItem?.argument?.type === "CallExpression"){
						currentItem?.argument?.arguments?.forEach(argumentItem => {
							if(argumentItem?.type === "ObjectExpression"){
								checkPropertiesArrayIndexKey(argumentItem?.properties, indexName, component)
							}
						})
					} else if(currentItem?.type === "ExpressionStatement" && currentItem?.expression?.type === "CallExpression"){
						currentItem?.expression?.arguments.forEach(currentArgument => {
							if(currentArgument?.type === "JSXElement"){
								checkAttributesJSXArrayIndexKey(currentArgument?.openingElement?.attributes, indexName, component)
							}
						})
					}
				})
			}
		}
	})
}

function recursiveSearch(item, result, component, parents = []) {
	if (!item) {
		return;
	}

	for (const [key, value] of Object.entries(item)) {
		if (!value) {
			continue;
		} else if (key === 'type') {
			if ((value === 'ClassDeclaration' || value === 'FunctionDeclaration') && item?.id?.name[0] === item?.id?.name[0].toUpperCase()) {
				updateComponentData(item, component)
				result.components.push(component);
			} else if (value === 'VariableDeclaration' && item.declarations[0].init && item.declarations[0].init.type === 'ArrowFunctionExpression' && item.declarations[0].id.name[0] === item.declarations[0].id.name[0].toUpperCase()) {
				const arrowFunction = item.declarations[0].init;
				updateComponentData(arrowFunction, component);
				component.name = item.declarations[0].id.name; // Adição da linha para atribuir o nome do componente
				result.components.push(component);
			} else if (value === 'FunctionDeclaration' || (value === 'VariableDeclaration' && item.declarations[0].init && item.declarations[0].init.type === 'ArrowFunctionExpression')) {
				updateFunctionData(item, result, component);
			} else if (value === 'ClassProperty') {
				updateClassPropertyData(item, component);
			} else if (value === 'ClassMethod') {
				updateComponentPropInInitialState(item, component, parents)
				updateClassMethodData(item, component);
			} else if (value === 'ObjectProperty') {
				updateObjectPropertyData(item, component);
			} else if (value === 'JSXElement') {
				updateJSXElementData(component);
			} else if (value === 'ImportSpecifier' || value === 'ImportDefaultSpecifier') {
				updateImportData(item, result);
			} else if(value === "MemberExpression") {
				updateComponentPropInInitialState(item, component, parents)
			} else if(value === "CallExpression"){
				updateComponentPropInInitialState(item, component, parents)
				updateComponentArrayIndexKey(item, component, parents)
			} else if(value === "ConditionalExpression"){
				updateComponentPropInInitialState(item, component, parents)
			}
		} else if (key === 'property' && !component.properties.includes(value.name)) {
			updateProcessProperty(item, component, value.name);
		} else if (key === 'callee') {
			updateCalleeData(value, component);
		} else if (key === 'name' && value.name === 'input') {
			updateInputData(item, component);
		} else if (typeof value === 'object') {
			recursiveSearch(value, result, component, [...parents.slice(-1), item]);
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
		}

		recursiveSearch(value, result, component);
	}

	return result;
}

module.exports = processAST;
