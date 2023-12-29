// Arquivo: ExemploReactSemJSXForaRender2.js

import React from 'react';

const App = () => {
    const listaItens = ["Item 1", "Item 2", "Item 3"];

    return (
        <div>
            <ul>
                {listaItens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
