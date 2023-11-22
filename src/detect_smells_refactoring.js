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

function updateComponentPropInInitialState(item, component) {
	if(item.object && item.object.name && item.object.name === "props"){
		const propsInitialState = {
			lineStart: item.object.loc.start.line,
			lineEnd: item.object.loc.end.line,
			line: readFiles.get_lines(component.file_url, item.object.loc.start.line, item.object.loc.end.line),
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
	if (item.kind === 'constructor') {
		const params = item.params.map((param) => param.name);

		for (const expression of item.body.body) {
			if (hasPropsInitialState(expression, params)) {
				const propsInitialState = {
					lineStart: expression.loc.start.line,
					lineEnd: expression.loc.end.line,
					line: readFiles.get_lines(component.file_url, propsInitialState.lineStart, propsInitialState.lineEnd),
				};

				component.propsInitialState.push(propsInitialState);
			}
		}
	} else if (item.key.name !== 'render') {
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

function recursiveSearch(item, result, component) {
	if (!item) {
		return;
	}

	for (const [key, value] of Object.entries(item)) {
		if (!value) {
			continue;
		} else if (key === 'type') {
			if ((value === 'ClassDeclaration' || value === 'FunctionDeclaration') && item.id && item.id.name[0] === item.id.name[0].toUpperCase()) {
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
				updateClassMethodData(item, component);
			} else if (value === 'ObjectProperty') {
				updateObjectPropertyData(item, component);
			} else if (value === 'JSXElement') {
				updateJSXElementData(component);
			} else if (value === 'ImportSpecifier' || value === 'ImportDefaultSpecifier') {
				updateImportData(item, result);
			} else if(value === "MemberExpression") {
				updateComponentPropInInitialState(item, component)
			}
		} else if (key === 'property' && !component.properties.includes(value.name)) {
			updateProcessProperty(item, component, value.name);
		} else if (key === 'callee') {
			updateCalleeData(value, component);
		} else if (key === 'name' && value.name === 'input') {
			updateInputData(item, component);
		} else if (typeof value === 'object') {
			recursiveSearch(value, result, component);
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
		}

		recursiveSearch(value, result, component);
	}

	return result;
}

module.exports = processAST;
