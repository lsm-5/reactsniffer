const detect_smells_rn_react = require("../../resultSmellsRefactoring");

describe("JSX Outside Render smell invalid", () => {
    it("Component Nesting/JSX Outside the Render case invalid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#1")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(2);
    });

    it("Component Nesting/JSX Outside the Render case invalid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#2")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(3);
    });

    it("Component Nesting/JSX Outside the Render case invalid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#3")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(1);
    });

    it("Component Nesting/JSX Outside the Render case invalid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#4")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(2);
    });

    it("Component Nesting/JSX Outside the Render case invalid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#5")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(3);
    });

    it("Component Nesting/JSX Outside the Render case invalid #6", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#6")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(1);
    });

    it("Component Nesting/JSX Outside the Render case invalid #7", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#7")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(1);
    });

    it("Component Nesting/JSX Outside the Render case invalid #8", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#8")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(1);
    });

    it("Component Nesting/JSX Outside the Render case invalid #9", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#9")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(1);
    });

    it("Component Nesting/JSX Outside the Render case invalid #10", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/invalid/case#10")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(2);
    });
});

describe("JSX Outside Render smell valid", () => {
    it("Component Nesting/JSX Outside the Render case valid #1", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#1")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #2", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#2")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #3", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#3")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #4", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#4")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #5", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#5")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #6", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#6")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #7", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#7")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #8", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#8")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #9", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#9")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })

    it("Component Nesting/JSX Outside the Render case valid #10", () => {
        expect(
            detect_smells_rn_react("src/tests/JSXOutsideRender/valid/case#10")[0][
                "Component Nesting/JSX Outside the Render"
                ]
        ).toBe(0);
    })
})
