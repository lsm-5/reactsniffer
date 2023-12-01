#!/usr/bin/env node
const filterReactFiles = require("./filter_react_files");
const detectSmells = require("./detect_smells");
const detectSmellsRefactoring = require("./detect_smells_refactoring");
const computeThresholds = require("./thresholds");

function detectSmellsRnReact(path) {
  if (!path.startsWith("/")) path = process.cwd() + "/" + path;

  const astReactFiles = filterReactFiles(path);

  const smells = {
    "Props in Initial State": 0,
    "Use of index as key in rendering with loops": 0,
    "Component Nesting/JSX Outside the Render": 0,
    "Large Components": 0,
    "Prop Drilling": 0,
    "Too many useState": 0,
    "Direct DOM Manipulation": 0,
    "Props Spreading": 0,
    "Deep Indentation": 0,
    "async functions in useEffect / async useEffect": 0,
    "Too many props": 0,
    "Duplicated Component / Repetitive Logic": 0,
    "Dont use setState in componentWillUpdate": 0,
    "Multiple booleans for state": 0,
    "Large useEffect": 0,
    "Mutable Variables": 0,
    "Procedural Patterns": 0,
    "String Literals": 0,
    "Declaring defaultProps for all props": 0,
    "Too many files": 0,
    "Never Using Class Components": 0,
    "Use PrevState": 0,
    bind: 0,
  };

  let allFiles = [];
  let allComponents = [];

  for (const [key, value] of Object.entries(astReactFiles)) {
    const out = {
      id: Number(key) + 1,
      "Large File": "N",
      "File URL": value.url,
      File: value.url.substring(value.url.lastIndexOf("/") + 1),
      LOC: value.number_of_lines,
    };

    const result = detectSmellsRefactoring(value);
    out.N_Components = result.components.length;
    out.N_Functions = result.functions.length;
    out.N_Imports = result.imports.length;

    allFiles.push(out);

    allComponents = allComponents.concat(result.components);
  }

  const outputComponents = [];
  const outputFiles = [];
  let contSmellsFiles = 0;
  const thresholds = computeThresholds.get_empirical_thresholds();

  // insere todos os arquivos com smell
  for (const file of allFiles) {
    if (
        file.LOC > thresholds.LOC_File ||
        file.N_Components > thresholds.N_Components ||
        // file['N_Functions'] > thresholds['N_Functions'] ||
        file.N_Imports > thresholds.N_Imports
    ) {
      file.id = ++contSmellsFiles;
      file["Large File"] = file.File;
      delete file.File;
      outputFiles.push(file);
    }
  }

  // insere todos os componentes com smell
  let contSmells = 0;
  let number_of_smell_components = 0;
  for (const [key, component] of Object.entries(allComponents)) {
    let hasSmells = false;

    const outComponent = {
      id: number_of_smell_components + 1,
      File: component.file,
      Component: component.name,
      LC: "N", //Large component
      TP: "N", // too many props
      ICC: "N", // Inheritance Instead of Composition
      FU: 0, // Force Update
      DOM: 0, // Direct DOM Manipulation
      JSX: "N", // JSX outside the render method
      UC: 0, // Uncontrolled Components
      PIS: 0, // Props in Initial State
      AIK: 0, // Array Index Key
    };

    // checagem 1
    const classMethods =
        component.classMethods.length + component.functions.length;

    if (
        component.loc > thresholds.LOC_Component ||
        component.properties.length > thresholds.N_props ||
        component.classProperties.length > thresholds.NA ||
        classMethods > thresholds.NM
    ) {
      hasSmells = true;
      outComponent.LC = "Y";
    }

    // checagem 2
    if (component.properties.length > thresholds.N_props) {
      hasSmells = true;
      outComponent.TP = "Y";
    }

    // checagem 3
    if (component.hasOwnProperty("superClass")) {
      hasSmells = true;
      outComponent.IIC = "Y";
    }

    // checagem 4
    if (component.forceUpdate.length > 0) {
      hasSmells = true;
      outComponent.FU = component.forceUpdate.length;
    }

    // checagem 5
    if (component.domManipulation.length > 0) {
      hasSmells = true;
      outComponent.DOM = component.domManipulation.length;
    }

    // checagem 6
    outComponent.JSX = component.JSXOutsideRender.length;
    if (outComponent.JSX > thresholds.NM_JSX) {
      hasSmells = true;
      outComponent.JSX = "Y";
    }

    // checagem 7
    if (component.uncontrolled.length > 0) {
      hasSmells = true;
      outComponent.UC = component.uncontrolled.length;
    }

    // checagem 8
    if (component.propsInitialState.length > 0) {
      hasSmells = true;
      outComponent.PIS = component.propsInitialState.length;
      smells['Props in Initial State'] += component.propsInitialState.length
    }

    if (component.arrayIndexKey.length > 0){
      hasSmells = true;
      outComponent.AIK = component.arrayIndexKey.length;
      smells['Use of index as key in rendering with loops'] += component.arrayIndexKey.length
    }

    if (hasSmells) {
      number_of_smell_components++;
      outputComponents.push(outComponent);
    }
  }

  return [
    smells,
    outputFiles,
    outputComponents,
    { allComponents, allFiles },
  ];
}

module.exports = detectSmellsRnReact;
