// Arquivo: ExemploReactSemJSXForaRender5.js

import React from 'react';

const App = () => {
    const numeros = [1, 2, 3, 4, 5];

    return (
        <div>
            <ul>
                {numeros.map(numero => (
                    <li key={numero}>{numero}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
