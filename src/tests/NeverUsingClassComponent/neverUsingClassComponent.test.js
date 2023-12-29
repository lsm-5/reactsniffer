const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Never Using Class Components smell invalid", () => {
  it("Never Using Class Components case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/NeverUsingClassComponent/invalid/case#1")[0][
        "Never Using Class Components"
      ]
    ).toBe(1);
  });

  it("Never Using Class Components case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/NeverUsingClassComponent/invalid/case#2")[0][
        "Never Using Class Components"
      ]
    ).toBe(1);
  });

  it("Never Using Class Components case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/invalid/case#3")[0][
            "Never Using Class Components"
            ]
    ).toBe(2);
  });

  it("Never Using Class Components case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/invalid/case#4")[0][
            "Never Using Class Components"
            ]
    ).toBe(1);
  });

  it("Never Using Class Components case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/invalid/case#5")[0][
            "Never Using Class Components"
            ]
    ).toBe(3);
  });

});

describe("Never Using Class Components smell valid", () => {
  it("Never Using Class Components case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/valid/case#1")[0][
            "Never Using Class Components"
            ]
    ).toBe(0);
  })

  it("Never Using Class Components case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/valid/case#2")[0][
            "Never Using Class Components"
            ]
    ).toBe(0);
  })

  it("Never Using Class Components case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/valid/case#3")[0][
            "Never Using Class Components"
            ]
    ).toBe(0);
  })

  it("Never Using Class Components case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/valid/case#4")[0][
            "Never Using Class Components"
            ]
    ).toBe(0);
  })

  it("Never Using Class Components case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/NeverUsingClassComponent/valid/case#5")[0][
            "Never Using Class Components"
            ]
    ).toBe(0);
  })
})
