import React from 'react';

const MeuComponenteReact = () => {
    const condicao = true;

    if (condicao) {
        return <div>A condição é verdadeira!</div>;
    } else {
        return <div>A condição é falsa.</div>;
    }
};

export default MeuComponenteReact;
