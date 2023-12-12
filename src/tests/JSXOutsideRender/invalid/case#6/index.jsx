import React, { useState } from "react";

const Main = () => {
    const [name, setName] = useState("Ateev");

    const Sub = () => {
        return <h1 className="p-5">Hello {name}, I am the child of Mr & Mrs Khana</h1>;
    };
    return (
        <>
            <Sub />
        </>
    );
};

export default Main;