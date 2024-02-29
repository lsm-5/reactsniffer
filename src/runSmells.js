const detect_smells_rn_react = require("./resultSmellsRefactoring");
const fs = require("fs");
var path1 = ""

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