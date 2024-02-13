#!/usr/bin/env node
const filterReactFiles = require("./filter_react_files");
const detectSmells = require("./detect_smells");
const detectSmellsRefactoring = require("./detect_smells_refactoring");
const computeThresholds = require("./thresholds");

function detectSmellsRnReact(path) {
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
    "Too many props": 0,
    "Large useEffect": 0,
    "Mutable Variables": 0,
    "Procedural Patterns": 0,
    "String Literals": 0,
    "Never Using Class Components": 0,
    "Use PrevState": 0,
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
      PD: 0, // Prop Drilling
      TMU: "N", // Too many useState
      PS: 0, // Props Spreading
      DI: 0, // Deep Indentation
      P: 0, // Properties
      LUE: 0, // Large UseEffect
      MV: 0, // Mutable Variables
      PP: 0, // Procedural Patterns
      SL: 0, // String Literals
      CD: "N", // Class Declaration
      PREVS: 0, // PrevState
    };

    // checagem 1
    if (
        component.loc > thresholds.LOC_Component ||
        component.classMethods.length + component.functions.length > thresholds.NM
    ) {
      hasSmells = true;
      outComponent.LC = "Y";
      smells['Large Components'] += 1
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
      smells['Direct DOM Manipulation'] += component.domManipulation.length;
    }

    // checagem 6
    outComponent.JSX = component.JSXOutsideRender.length;
    if (outComponent.JSX > 0) {
      hasSmells = true;
      outComponent.JSX = "Y";
      smells['Component Nesting/JSX Outside the Render'] += component.JSXOutsideRender.length
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

    // checagem 9
    if (component.propDrilling.length > 0) {
      hasSmells = true;
      outComponent.PD = component.propDrilling.length;
      smells['Prop Drilling'] += component.propDrilling.length
    }

    // checagem 10
    if (component.arrayIndexKey.length > 0){
      hasSmells = true;
      outComponent.AIK = component.arrayIndexKey.length;
      smells['Use of index as key in rendering with loops'] += component.arrayIndexKey.length
    }

    // checagem 11
    if(component.useState.length > thresholds['N_useState']){
      hasSmells = true
      outComponent.TMU = "Y";
      smells['Too many useState'] += 1;
    }

    // checagem 12
    if(component.propsSpreading.length > 0){
      hasSmells = true
      outComponent.PS = component.propsSpreading.length
      smells['Props Spreading'] += component.propsSpreading.length
    }

    // checagem 13
    if(component.deepIndentation.length > 0){
      hasSmells = true
      outComponent.DI = component.deepIndentation.length
      smells['Deep Indentation'] += component.deepIndentation.length
    }

    // checagem 14
    if(component.properties.length > thresholds.N_props){
      hasSmells = true
      outComponent.P = component.properties.length
      smells['Too many props'] += 1
    }

    // checagem 15
    if(component.largeUseEffect.length > 0){
      hasSmells = true
      outComponent.LUE = component.largeUseEffect.length
      smells['Large useEffect'] += component.largeUseEffect.length
    }

    // checagem 16
    if(component.mutableVariables.length > 0){
      hasSmells = true
      outComponent.MV = component.mutableVariables.length
      smells['Mutable Variables'] += component.mutableVariables.length
    }

    // checagem 17
    if(component.proceduralPatterns.length > 0){
      hasSmells = true
      outComponent.PP = component.proceduralPatterns.length
      smells['Procedural Patterns'] += component.proceduralPatterns.length
    }

    // checagem 18
    if(component.stringLiterals.length > 0){
      hasSmells = true
      outComponent.SL = component.stringLiterals.length
      smells['String Literals'] += component.stringLiterals.length
    }

    // checagem 19
    if(component.type === "ClassDeclaration"){
      hasSmells = true
      outComponent.CD = "Y"
      smells['Never Using Class Components'] += 1
    }

    // checagem 20
    if(component.prevState.length > 0){
      hasSmells = true
      outComponent.PREVS = component.prevState.length
      smells['Use PrevState'] += component.prevState.length
    }

    if (hasSmells) {
      number_of_smell_components++;
      outputComponents.push(outComponent);
    }
  }

  return [
    smells,
    { outputFiles, outputComponents },
    { allComponents, allFiles },
  ];
}

module.exports = detectSmellsRnReact;
