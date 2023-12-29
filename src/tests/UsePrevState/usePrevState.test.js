const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Use PrevState smell invalid", () => {
  it("Use PrevState case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/UsePrevState/invalid/case#1")[0][
        "Use PrevState"
      ]
    ).toBe(1);
  });

  it("Use PrevState case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/UsePrevState/invalid/case#2")[0][
        "Use PrevState"
      ]
    ).toBe(1);
  });

  it("Use PrevState case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/invalid/case#3")[0][
            "Use PrevState"
            ]
    ).toBe(2);
  });

  it("Use PrevState case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/invalid/case#4")[0][
            "Use PrevState"
            ]
    ).toBe(1);
  });

  it("Use PrevState case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/invalid/case#5")[0][
            "Use PrevState"
            ]
    ).toBe(3);
  });

});

describe("Use PrevState smell valid", () => {
  it("Use PrevState case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/valid/case#1")[0][
            "Use PrevState"
            ]
    ).toBe(0);
  })

  it("Use PrevState case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/valid/case#2")[0][
            "Use PrevState"
            ]
    ).toBe(0);
  })

  it("Use PrevState case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/valid/case#3")[0][
            "Use PrevState"
            ]
    ).toBe(0);
  })

  it("Use PrevState case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/valid/case#4")[0][
            "Use PrevState"
            ]
    ).toBe(0);
  })

  it("Use PrevState case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/UsePrevState/valid/case#5")[0][
            "Use PrevState"
            ]
    ).toBe(0);
  })
})
