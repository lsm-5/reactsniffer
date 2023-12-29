import React from 'react';

interface MeuComponenteProps {
    condicao: boolean;
}

const MeuComponenteReactComTSX: React.FC<MeuComponenteProps> = ({ condicao }) => {
    if (condicao) {
        return <div>A condição é verdadeira!</div>;
    } else {
        return <div>A condição é falsa.</div>;
    }
};

export default MeuComponenteReactComTSX;
