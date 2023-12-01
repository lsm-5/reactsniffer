const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Check props in initial state smell invalid", () => {
  it("Props in Initial State case invalid #1", () => {
    expect(
      detect_smells_rn_react("src/tests/propInInitialState/invalid/case#1")[0][
        "Props in Initial State"
      ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #2", () => {
    expect(
      detect_smells_rn_react("src/tests/propInInitialState/invalid/case#2")[0][
        "Props in Initial State"
      ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#3")[0][
            "Props in Initial State"
            ]
    ).toBe(2);
  });

  it("Props in Initial State case invalid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#4")[0][
            "Props in Initial State"
            ]
    ).toBe(2);
  });

  it("Props in Initial State case invalid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#5")[0][
            "Props in Initial State"
            ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #6", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#6")[0][
            "Props in Initial State"
            ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #7", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#7")[0][
            "Props in Initial State"
            ]
    ).toBe(2);
  });

  it("Props in Initial State case invalid #8", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#8")[0][
            "Props in Initial State"
            ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #9", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#9")[0][
            "Props in Initial State"
            ]
    ).toBe(1);
  });

  it("Props in Initial State case invalid #10", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/invalid/case#10")[0][
            "Props in Initial State"
            ]
    ).toBe(2);
  });
});

describe("Check props in initial state smell valid", () => {
  it("Props in Initial State case valid #1", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#1")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #2", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#2")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #3", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#3")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #4", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#4")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #5", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#5")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #6", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#6")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #7", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#7")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #8", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#8")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #9", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#9")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })

  it("Props in Initial State case valid #10", () => {
    expect(
        detect_smells_rn_react("src/tests/propInInitialState/valid/case#10")[0][
            "Props in Initial State"
            ]
    ).toBe(0);
  })
})
