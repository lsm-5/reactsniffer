const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Too many useState smell invalid", () => {
    it("Too many useState case invalid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/invalid/case#1")[0][
                "Too many useState"
                ]
        ).toBe(1);
    });

    it("Too many useState case invalid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/invalid/case#2")[0][
                "Too many useState"
                ]
        ).toBe(1);
    });

    it("Too many useState case invalid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/invalid/case#3")[0][
                "Too many useState"
                ]
        ).toBe(2);
    });

    it("Too many useState case invalid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/invalid/case#4")[0][
                "Too many useState"
                ]
        ).toBe(1);
    });

    it("Too many useState case invalid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/invalid/case#5")[0][
                "Too many useState"
                ]
        ).toBe(3);
    });
});

describe("Too many useState smell valid", () => {
    it("Too many useState case valid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/valid/case#1")[0][
                "Too many useState"
                ]
        ).toBe(0);
    })

    it("Too many useState case valid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/valid/case#2")[0][
                "Too many useState"
                ]
        ).toBe(0);
    })

    it("Too many useState case valid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/valid/case#3")[0][
                "Too many useState"
                ]
        ).toBe(0);
    })

    it("Too many useState case valid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/valid/case#4")[0][
                "Too many useState"
                ]
        ).toBe(0);
    })

    it("Too many useState case valid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/TooManyUseState/valid/case#5")[0][
                "Too many useState"
                ]
        ).toBe(0);
    })
})
