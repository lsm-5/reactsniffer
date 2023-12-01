const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("Check props in initial state smell invalid", () => {
    it("Use of index as key in rendering with loops case invalid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#1")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(5);
    });

    it("Use of index as key in rendering with loops case invalid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#2")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(2);
    });

    it("Use of index as key in rendering with loops case invalid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#3")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#4")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#5")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #6", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#6")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #7", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#7")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #8", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#8")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #9", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#9")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });

    it("Use of index as key in rendering with loops case invalid #10", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/invalid/case#10")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(1);
    });
});

describe("Check props in initial state smell valid", () => {
    it("Use of index as key in rendering with loops case valid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#1")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#2")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#3")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#4")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#5")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #6", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#6")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #7", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#7")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #8", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#8")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #9", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#9")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })

    it("Use of index as key in rendering with loops case valid #10", () => {
        expect(
            detect_smells_rn_react("src/tests/noArrayIndexKey/valid/case#10")[0][
                "Use of index as key in rendering with loops"
                ]
        ).toBe(0);
    })
})
