const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Large useEffect smell invalid", () => {
  it("Large useEffect case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/LargeUseEffect/invalid/case#1")[0][
        "Large useEffect"
      ]
    ).toBe(1);
  });

  it("Large useEffect case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/LargeUseEffect/invalid/case#2")[0][
        "Large useEffect"
      ]
    ).toBe(1);
  });

  it("Large useEffect case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/invalid/case#3")[0][
            "Large useEffect"
            ]
    ).toBe(2);
  });

  it("Large useEffect case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/invalid/case#4")[0][
            "Large useEffect"
            ]
    ).toBe(1);
  });

  it("Large useEffect case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/invalid/case#5")[0][
            "Large useEffect"
            ]
    ).toBe(3);
  });

});

describe("Large useEffect smell valid", () => {
  it("Large useEffect case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/valid/case#1")[0][
            "Large useEffect"
            ]
    ).toBe(0);
  })

  it("Large useEffect case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/valid/case#2")[0][
            "Large useEffect"
            ]
    ).toBe(0);
  })

  it("Large useEffect case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/valid/case#3")[0][
            "Large useEffect"
            ]
    ).toBe(0);
  })

  it("Large useEffect case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/valid/case#4")[0][
            "Large useEffect"
            ]
    ).toBe(0);
  })

  it("Large useEffect case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/LargeUseEffect/valid/case#5")[0][
            "Large useEffect"
            ]
    ).toBe(0);
  })
})
