const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("String Literals smell invalid", () => {
  it("String Literals case invalid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/invalid/case#1")[0][
            "String Literals"
            ]
    ).toBe(1);
  });

  it("String Literals case invalid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/invalid/case#2")[0][
            "String Literals"
            ]
    ).toBe(1);
  });

  it("String Literals case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/invalid/case#3")[0][
            "String Literals"
            ]
    ).toBe(2);
  });

  it("String Literals case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/invalid/case#4")[0][
            "String Literals"
            ]
    ).toBe(1);
  });

  it("String Literals case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/invalid/case#5")[0][
            "String Literals"
            ]
    ).toBe(3);
  });

});

describe("String Literals smell valid", () => {
  it("String Literals case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/valid/case#1")[0][
            "String Literals"
            ]
    ).toBe(0);
  })

  it("String Literals case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/valid/case#2")[0][
            "String Literals"
            ]
    ).toBe(0);
  })

  it("String Literals case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/valid/case#3")[0][
            "String Literals"
            ]
    ).toBe(0);
  })

  it("String Literals case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/valid/case#4")[0][
            "String Literals"
            ]
    ).toBe(0);
  })

  it("String Literals case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/StringLiterals/valid/case#5")[0][
            "String Literals"
            ]
    ).toBe(0);
  })
})
