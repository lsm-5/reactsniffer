#!/usr/bin/env node
const filter_react_files = require("./filter_react_files");
const detect_smells = require("./detect_smells");
const compute_thresholds = require("./thresholds");

function detect_smells_rn_react(path) {
  if (!path.startsWith("/")) path = process.cwd() + "/" + path;

  ast_react_files = filter_react_files(path);

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
    "Duplicated Component / Repititive Logic": 0,
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

  const all_files = [];
  const all_components = [];

  for (var [key, value] of Object.entries(ast_react_files)) {
    const out = {};
    out["id"] = Number(key) + 1;
    out["Large File"] = "N";
    out["File URL"] = value["url"];
    out["File"] = value["url"].substring(value["url"].lastIndexOf("/") + 1);
    out["LOC"] = value["number_of_lines"];
    file_components = detect_smells(value)["components"];
    out["N_Components"] = file_components.length;
    out["N_Functions"] = value["functions"].length;
    out["N_Imports"] = value["imports"].length;

    all_files.push(out);

    for (const component of file_components) {
      all_components.push(component);
    }
  }

  const output_components = [];
  const output_files = [];
  let cont_smells_files = 0;
  const thresholds = compute_thresholds.get_empirical_thresholds();

  // insere todos os arquivos com smell
  for (const file of all_files) {
    if (
      file["LOC"] > thresholds["LOC_File"] ||
      file["N_Components"] > thresholds["N_Components"] ||
      // file['N_Functions'] > thresholds['N_Functions'] ||
      file["N_Imports"] > thresholds["N_Imports"]
    ) {
      file["id"] = ++cont_smells_files;
      file["Large File"] = file["File"];
      delete file["File"];
      output_files.push(file);
    }
  }

  // insere todos os componentes com smell
  let cont_smells = 0;
  var number_of_smell_components = 0;
  for (const [key, component] of Object.entries(all_components)) {
    let has_smells = false;

    const out_component = {
      id: number_of_smell_components + 1,
      File: component["file"],
      Component: component["name"],
      LC: "N",
      TP: "N",
      ICC: "N",
      FU: 0,
      DOM: 0,
      JSX: "N",
      UC: 0,
      PIS: 0,
    };

    // checagem 1
    const classMethods =
      component["classMethods"].length + component["functions"].length;

    if (
      component["loc"] > thresholds["LOC_Component"] ||
      component["properties"].length > thresholds["N_props"] ||
      component["classProperties"].length > thresholds["NA"] ||
      classMethods > thresholds["NM"]
    ) {
      has_smells = true;
      out_component["LC"] = "Y";
    }

    // checagem 2
    if (component["properties"].length > thresholds["N_props"]) {
      has_smells = true;
      out_component["TP"] = "Y";
    }

    // checagem 3
    if (component.hasOwnProperty("superClass")) {
      has_smells = true;
      out_component["IIC"] = "Y";
    }

    // checagem 4
    if (component["forceUpdate"].length > 0) {
      has_smells = true;
      out_component["FU"] = component["forceUpdate"].length;
    }

    // checagem 5
    if (component["dom_manipulation"].length > 0) {
      has_smells = true;
      out_component["DOM"] = component["dom_manipulation"].length;
    }

    // checagem 6
    out_component["JSX"] = component["JSXOutsideRender"].length;
    if (out_component["JSX"] > thresholds["NM_JSX"]) {
      has_smells = true;
      out_component["JSX"] = "Y";
    }

    // checagem 7
    if (component["uncontrolled"].length > 0) {
      has_smells = true;
      out_component["UC"] = component["uncontrolled"].length;
    }

    // checagem 8
    if (component["propsInitialState"].length > 0) {
      has_smells = true;
      out_component["PIS"] = component["propsInitialState"].length;
    }

    if (has_smells) {
      number_of_smell_components++;
      output_components.push(out_component);
    }
  }

  return [
    smells,
    output_files,
    output_components,
    { all_components, all_files },
  ];
}

module.exports = detect_smells_rn_react;
