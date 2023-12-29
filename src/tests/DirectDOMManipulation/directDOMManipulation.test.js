const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Direct DOM Manipulation smell invalid", () => {
    it("Direct DOM Manipulation case invalid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/invalid/case#1")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(1);
    });

    it("Direct DOM Manipulation case invalid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/invalid/case#2")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(1);
    });

    it("Direct DOM Manipulation case invalid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/invalid/case#3")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(2);
    });

    it("Direct DOM Manipulation case invalid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/invalid/case#4")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(1);
    });

    it("Direct DOM Manipulation case invalid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/invalid/case#5")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(3);
    });
});

describe("Direct DOM Manipulation smell valid", () => {
    it("Direct DOM Manipulation case valid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/valid/case#1")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(0);
    })

    it("Direct DOM Manipulation case valid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/valid/case#2")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(0);
    })

    it("Direct DOM Manipulation case valid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/valid/case#3")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(0);
    })

    it("Direct DOM Manipulation case valid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/valid/case#4")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(0);
    })

    it("Direct DOM Manipulation case valid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/DirectDOMManipulation/valid/case#5")[0][
                "Direct DOM Manipulation"
                ]
        ).toBe(0);
    })
})
