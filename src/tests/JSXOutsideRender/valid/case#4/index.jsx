// Arquivo: ExemploReactSemJSXForaRender4.js

import React from 'react';

const App = () => {
    const mensagem = "Bem-vindo ao exemplo React";

    return (
        <div>
            <h2>{mensagem}</h2>
            <p>Este exemplo não possui JSX fora do bloco de renderização e não tem componentes aninhados.</p>
            <button>Clique aqui</button>
        </div>
    );
};

export default App;
