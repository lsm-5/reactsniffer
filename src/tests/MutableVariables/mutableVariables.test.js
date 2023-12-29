const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Mutable Variables smell invalid", () => {
  it("Mutable Variables case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/MutableVariables/invalid/case#1")[0][
        "Mutable Variables"
      ]
    ).toBe(2);
  });

  it("Mutable Variables case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/MutableVariables/invalid/case#2")[0][
        "Mutable Variables"
      ]
    ).toBe(2);
  });

  it("Mutable Variables case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/invalid/case#3")[0][
            "Mutable Variables"
            ]
    ).toBe(4);
  });

  it("Mutable Variables case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/invalid/case#4")[0][
            "Mutable Variables"
            ]
    ).toBe(2);
  });

  it("Mutable Variables case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/invalid/case#5")[0][
            "Mutable Variables"
            ]
    ).toBe(6);
  });

});

describe("Mutable Variables smell valid", () => {
  it("Mutable Variables case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/valid/case#1")[0][
            "Mutable Variables"
            ]
    ).toBe(0);
  })

  it("Mutable Variables case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/valid/case#2")[0][
            "Mutable Variables"
            ]
    ).toBe(0);
  })

  it("Mutable Variables case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/valid/case#3")[0][
            "Mutable Variables"
            ]
    ).toBe(0);
  })

  it("Mutable Variables case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/valid/case#4")[0][
            "Mutable Variables"
            ]
    ).toBe(0);
  })

  it("Mutable Variables case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/MutableVariables/valid/case#5")[0][
            "Mutable Variables"
            ]
    ).toBe(0);
  })
})
