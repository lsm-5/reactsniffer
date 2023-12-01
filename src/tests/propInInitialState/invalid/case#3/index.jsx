import {useState} from "react";
import {useEffect} from "react";

function Button({ text, value }) {
    const [buttonText] = useState(text)
    const [buttonValue] = useState(value)

    return (
        <>
            <h1>{buttonValue}</h1>
            <button>{buttonText}</button>
        </>
    )
}