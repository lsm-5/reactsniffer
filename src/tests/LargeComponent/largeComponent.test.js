const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Large Components smell invalid", () => {
    it("Large Components case invalid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/invalid/case#1")[0][
                "Large Components"
                ]
        ).toBe(1);
    });

    it("Large Components case invalid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/invalid/case#2")[0][
                "Large Components"
                ]
        ).toBe(1);
    });

    it("Large Components case invalid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/invalid/case#3")[0][
                "Large Components"
                ]
        ).toBe(2);
    });

    it("Large Components case invalid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/invalid/case#4")[0][
                "Large Components"
                ]
        ).toBe(1);
    });

    it("Large Components case invalid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/invalid/case#5")[0][
                "Large Components"
                ]
        ).toBe(3);
    });
});

describe("Large Components smell valid", () => {
    it("Large Components case valid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/valid/case#1")[0][
                "Large Components"
                ]
        ).toBe(0);
    })

    it("Large Components case valid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/valid/case#2")[0][
                "Large Components"
                ]
        ).toBe(0);
    })

    it("Large Components case valid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/valid/case#3")[0][
                "Large Components"
                ]
        ).toBe(0);
    })

    it("Large Components case valid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/valid/case#4")[0][
                "Large Components"
                ]
        ).toBe(0);
    })

    it("Large Components case valid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/LargeComponent/valid/case#5")[0][
                "Large Components"
                ]
        ).toBe(0);
    })
})
