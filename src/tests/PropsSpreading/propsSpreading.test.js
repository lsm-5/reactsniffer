const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Props Spreading smell invalid", () => {
  it("Props Spreading case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/PropsSpreading/invalid/case#1")[0][
        "Props Spreading"
      ]
    ).toBe(2);
  });

  it("Props Spreading case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/PropsSpreading/invalid/case#2")[0][
        "Props Spreading"
      ]
    ).toBe(2);
  });

  it("Props Spreading case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/invalid/case#3")[0][
            "Props Spreading"
            ]
    ).toBe(4);
  });

  it("Props Spreading case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/invalid/case#4")[0][
            "Props Spreading"
            ]
    ).toBe(2);
  });

  it("Props Spreading case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/invalid/case#5")[0][
            "Props Spreading"
            ]
    ).toBe(6);
  });

});

describe("Props Spreading smell valid", () => {
  it("Props Spreading case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/valid/case#1")[0][
            "Props Spreading"
            ]
    ).toBe(0);
  })

  it("Props Spreading case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/valid/case#2")[0][
            "Props Spreading"
            ]
    ).toBe(0);
  })

  it("Props Spreading case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/valid/case#3")[0][
            "Props Spreading"
            ]
    ).toBe(0);
  })

  it("Props Spreading case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/valid/case#4")[0][
            "Props Spreading"
            ]
    ).toBe(0);
  })

  it("Props Spreading case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/PropsSpreading/valid/case#5")[0][
            "Props Spreading"
            ]
    ).toBe(0);
  })
})
