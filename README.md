# ReactSniffer 

[![npm version](https://badge.fury.io/js/reactsniffer2.svg)](https://www.npmjs.com/package/reactsniffer2)
[![license](https://img.shields.io/npm/l/reactsniffer2)](https://github.com/lsm-5/reactsniffer2/blob/main/LICENSE)

[![NPM](https://nodei.co/npm/reactsniffer2.png)](https://nodei.co/npm/reactsniffer2/)

ReactSniffer2 is a fork of the ReactSniffer tool, designed to assist practitioners and researchers in detecting code smells within React-based web systems. This enhanced version includes two primary components: a parser for analyzing React files and a Smells Detector module for identifying code smells.
<p align="center">
    <img src="https://github.com/fabiosferreira/reactsniffer/blob/main/img/ReactSniffer-Architecture.png" width= "600px" />
</p>

The Parser is a Command-Line Interface (CLI) implemented in Node, which receives as input a valid front-end file and generates an Abstract Syntax Tree (AST) in a JSON format. The Smells Detector module is also implemented in Node and relies on the AST to search and inspect React elements. 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install locally.

```bash
npm install -g reactsniffer2
```

## Usage

To use this tool you need to provide the repository directory (e.g., myproject/react/src)

```bash
reactsniffer2 myproject/react/src
```

### Output

The output will consist of a summary of the code smells detected in the command-line interface (CLI) and a JSON file containing a detailed summary of the code smells, including the files and components where these smells were identified, as well as comprehensive detection across all files and components.

## Supported Smells

ReactSniffer2 supports the following smells: 

| Code Smell                                   | Description                              |
|----------------------------------------------|------------------------------------------|
| Props in Initial State                       | Using props in the initial state         |
| Use of index as key in rendering with loops  | Using index as a key in rendering loops  |
| Component Nesting/JSX Outside the Render     | Component nesting/JSX outside the render |
| Large Components                             | Components that are too large            |
| Prop Drilling                                | Prop Drilling                            |
| Too many useState                            | Excessive use of useState                |
| Direct DOM Manipulation                      | Direct DOM manipulation                  |
| Props Spreading                              | Spreading props                          |
| Deep Indentation                             | Deep indentation                         |
| Too many props                               | Too many props                           |
| Large useEffect                              | Large useEffect                          |
| Mutable Variables                            | Mutable variables                        |
| Procedural Patterns                          | Procedural patterns                      |
| String Literals                              | String literals                          |
| Never Using Class Components                 | Never using class components             |
| Use PrevState                                | Using PrevState                          |



## License

[MIT](https://choosealicense.com/licenses/mit/)