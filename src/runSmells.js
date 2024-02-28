const detect_smells_rn_react = require("./resultSmellsRefactoring");
const fs = require("fs");
// var path = process.argv.slice(2)[0];
// if (!path.startsWith("/")) path = process.cwd() + "/" + path;

var path1 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/ant-design-mobile-master/"
var path2 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/ant-design-pro-master/"
var path3 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/chakra-ui-main/"
var path4 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/docusaurus-main/"
var path5 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/NativeBase-master/"
var path6 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-beautiful-dnd-master/"
var path7 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-content-loader-master/"
var path8 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-native-elements-next/"
var path9 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-native-gifted-chat-master/"
var path10 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-native-maps-master/"
var path11 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-native-navigation-master/"
var path12 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-native-paper-main/"
var path13 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-spring-main/"
var path14 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/react-virtualized-master/"
var path15 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/superset-master/"
var path16 = "C:/Users/lucas/Desktop/RepoPessoais/TCC/zustand-main/"

const [smells, infoSmells, infoGeneral] = detect_smells_rn_react(path1);

console.log(
  "\x1b[36m%s\x1b[0m",
  "Number of analyzed files:",
  infoGeneral.allFiles.length
);

console.log(
  "\x1b[36m%s\x1b[0m",
  "Number of analyzed components:",
  infoGeneral.allComponents.length
);

console.log("\n\x1b[1mSmells Found:\x1b[0m");
for (const smell in smells) {
  const smellCount = smells[smell];

  if (smellCount >= 1) {
    console.log(`\x1b[31m${smell}:\x1b[0m ${smellCount}`);
  } else {
    console.log(`\x1b[33m${smell}:\x1b[0m ${smellCount}`);
  }
}

const result = {
    "smells (General Infomation)": smells,
    "files/components smells (Component Smell Information)": infoSmells,
    "files/components (Specific Information)": infoGeneral
}

var dictString = JSON.stringify(result, null, 2); // O segundo e terceiro argumentos são opcionais e usados para formatar a string JSON
fs.writeFile('Smells-ReactSniffer.json', dictString, function(err) {
    if (err) {
        console.log('Erro ao escrever o arquivo', err);
    } else {
        console.log('Arquivo JSON criado com sucesso');
    }
});