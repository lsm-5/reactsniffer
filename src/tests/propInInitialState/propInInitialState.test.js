const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Check props in initial state smell", () => {
  it("Props in Initial State case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/propInInitialState/case#1")[0][
        "Props in Initial State"
      ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/propInInitialState/case#2")[0][
        "Props in Initial State"
      ]
    ).toBe(1);
  });
});
