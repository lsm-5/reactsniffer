const detect_smells_rn_react = require("./resultSmells");
var dirname = process.argv.slice(2)[0];

const [smells, files, components, info] = detect_smells_rn_react(dirname);

console.log(
  "\x1b[36m%s\x1b[0m",
  "Number of analyzed files:",
  info.all_files.length
);
console.log(
  "\x1b[36m%s\x1b[0m",
  "Number of analyzed components:",
  info.all_components.length
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
