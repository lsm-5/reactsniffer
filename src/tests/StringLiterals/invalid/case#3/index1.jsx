import React from 'react';

const MeuComponenteReact = () => {
    const minhaString = 'OpenAI';

    if (minhaString === 'OpenAI') {
        return <div>String é igual a OpenAI!</div>;
    } else {
        return <div>String não é igual a OpenAI.</div>;
    }
};

export default MeuComponenteReact;
