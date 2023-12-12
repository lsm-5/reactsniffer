import { useCallback, useEffect, useState } from "react";

const Parent = () => {
    const SecondChild = () => {
        return <div> <SecondChild/> </div>
    }

    const Child = () => {
        return <div> <SecondChild/> </div>
    }

    return (
        <div>
            <Child/>
        </div>
    )
}