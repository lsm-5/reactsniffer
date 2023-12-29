const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Too many props smell invalid", () => {
  it("Too many props case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/TooManyProps/invalid/case#1")[0][
        "Too many props"
      ]
    ).toBe(1);
  });

  it("Too many props case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/TooManyProps/invalid/case#2")[0][
        "Too many props"
      ]
    ).toBe(1);
  });

  it("Too many props case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/invalid/case#3")[0][
            "Too many props"
            ]
    ).toBe(2);
  });

  it("Too many props case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/invalid/case#4")[0][
            "Too many props"
            ]
    ).toBe(1);
  });

  it("Too many props case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/invalid/case#5")[0][
            "Too many props"
            ]
    ).toBe(3);
  });

});

describe("Too many props smell valid", () => {
  it("Too many props case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/valid/case#1")[0][
            "Too many props"
            ]
    ).toBe(0);
  })

  it("Too many props case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/valid/case#2")[0][
            "Too many props"
            ]
    ).toBe(0);
  })

  it("Too many props case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/valid/case#3")[0][
            "Too many props"
            ]
    ).toBe(0);
  })

  it("Too many props case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/valid/case#4")[0][
            "Too many props"
            ]
    ).toBe(0);
  })

  it("Too many props case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/TooManyProps/valid/case#5")[0][
            "Too many props"
            ]
    ).toBe(0);
  })
})
