const detect_smells_rn_react = require("./resultSmellsRefactoring");
// var path = process.argv.slice(2)[0];
// if (!path.startsWith("/")) path = process.cwd() + "/" + path;

var path = "C:/Users/lucas/Desktop/RepoPessoais/TCC/ant-design-mobile-master/src/"

const [smells, infoSmells, infoGeneral] = detect_smells_rn_react(path);

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
