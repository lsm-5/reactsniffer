import React from 'react';

interface MeuComponenteProps {
    minhaString: string;
}

const MeuComponenteReactComTSX: React.FC<MeuComponenteProps> = ({ minhaString }) => {
    if (minhaString === 'TypeScript') {
        return <div>String é igual a TypeScript!</div>;
    } else {
        return <div>String não é igual a TypeScript.</div>;
    }
};

export default MeuComponenteReactComTSX;
