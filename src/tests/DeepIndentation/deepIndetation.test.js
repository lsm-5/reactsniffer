const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Deep Indentation smell invalid", () => {
  it("Deep Indentation case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/DeepIndentation/invalid/case#1")[0][
        "Deep Indentation"
      ]
    ).toBe(2);
  });

  it("Deep Indentation case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/DeepIndentation/invalid/case#2")[0][
        "Deep Indentation"
      ]
    ).toBe(2);
  });

  it("Deep Indentation case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/invalid/case#3")[0][
            "Deep Indentation"
            ]
    ).toBe(4);
  });

  it("Deep Indentation case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/invalid/case#4")[0][
            "Deep Indentation"
            ]
    ).toBe(2);
  });

  it("Deep Indentation case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/invalid/case#5")[0][
            "Deep Indentation"
            ]
    ).toBe(6);
  });

});

describe("Deep Indentation smell valid", () => {
  it("Deep Indentation case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/valid/case#1")[0][
            "Deep Indentation"
            ]
    ).toBe(0);
  })

  it("Deep Indentation case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/valid/case#2")[0][
            "Deep Indentation"
            ]
    ).toBe(0);
  })

  it("Deep Indentation case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/valid/case#3")[0][
            "Deep Indentation"
            ]
    ).toBe(0);
  })

  it("Deep Indentation case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/valid/case#4")[0][
            "Deep Indentation"
            ]
    ).toBe(0);
  })

  it("Deep Indentation case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/DeepIndentation/valid/case#5")[0][
            "Deep Indentation"
            ]
    ).toBe(0);
  })
})
