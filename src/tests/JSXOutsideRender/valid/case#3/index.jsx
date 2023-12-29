// Arquivo: ExemploReactSemJSXForaRender3.js

import React from 'react';

const App = () => {
    const link = "https://www.exemplo.com";

    return (
        <div>
            <p>
                Visite nosso site: <a href={link}>Exemplo</a>
            </p>
        </div>
    );
};

export default App;
