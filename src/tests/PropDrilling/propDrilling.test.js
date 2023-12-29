const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Prop Drilling smell invalid", () => {
  it("Prop Drilling case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/PropDrilling/invalid/case#1")[0][
        "Prop Drilling"
      ]
    ).toBe(1);
  });

  it("Prop Drilling case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/PropDrilling/invalid/case#2")[0][
        "Prop Drilling"
      ]
    ).toBe(1);
  });

  it("Prop Drilling case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/invalid/case#3")[0][
            "Prop Drilling"
            ]
    ).toBe(1);
  });

  it("Prop Drilling case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/invalid/case#4")[0][
            "Prop Drilling"
            ]
    ).toBe(2);
  });

  it("Prop Drilling case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/invalid/case#5")[0][
            "Prop Drilling"
            ]
    ).toBe(1);
  });

  it("Prop Drilling case invalid #6", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/invalid/case#6")[0][
            "Prop Drilling"
            ]
    ).toBe(4);
  });
});

describe("Prop Drilling smell valid", () => {
  it("Prop Drilling case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/valid/case#1")[0][
            "Prop Drilling"
            ]
    ).toBe(0);
  })

  it("Prop Drilling case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/valid/case#2")[0][
            "Prop Drilling"
            ]
    ).toBe(0);
  })

  it("Prop Drilling case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/valid/case#3")[0][
            "Prop Drilling"
            ]
    ).toBe(0);
  })

  it("Prop Drilling case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/valid/case#4")[0][
            "Prop Drilling"
            ]
    ).toBe(0);
  })

  it("Prop Drilling case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/valid/case#5")[0][
            "Prop Drilling"
            ]
    ).toBe(0);
  })

  it("Prop Drilling case valid #6", () => {
    expect(
        detect_smells_rn_react("src/tests/PropDrilling/valid/case#6")[0][
            "Prop Drilling"
            ]
    ).toBe(0);
  })

})
