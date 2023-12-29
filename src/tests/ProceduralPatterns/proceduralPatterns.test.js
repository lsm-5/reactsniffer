const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Procedural Patterns smell invalid", () => {
  it("Procedural Patterns case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/ProceduralPatterns/invalid/case#1")[0][
        "Procedural Patterns"
      ]
    ).toBe(1);
  });

  it("Procedural Patterns case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/ProceduralPatterns/invalid/case#2")[0][
        "Procedural Patterns"
      ]
    ).toBe(1);
  });

  it("Procedural Patterns case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/invalid/case#3")[0][
            "Procedural Patterns"
            ]
    ).toBe(2);
  });

  it("Procedural Patterns case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/invalid/case#4")[0][
            "Procedural Patterns"
            ]
    ).toBe(1);
  });

  it("Procedural Patterns case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/invalid/case#5")[0][
            "Procedural Patterns"
            ]
    ).toBe(3);
  });

});

describe("Procedural Patterns smell valid", () => {
  it("Procedural Patterns case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/valid/case#1")[0][
            "Procedural Patterns"
            ]
    ).toBe(0);
  })

  it("Procedural Patterns case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/valid/case#2")[0][
            "Procedural Patterns"
            ]
    ).toBe(0);
  })

  it("Procedural Patterns case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/valid/case#3")[0][
            "Procedural Patterns"
            ]
    ).toBe(0);
  })

  it("Procedural Patterns case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/valid/case#4")[0][
            "Procedural Patterns"
            ]
    ).toBe(0);
  })

  it("Procedural Patterns case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/ProceduralPatterns/valid/case#5")[0][
            "Procedural Patterns"
            ]
    ).toBe(0);
  })
})
