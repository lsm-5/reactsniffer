import React from 'react';

interface MeuComponenteProps {
    mensagem: string;
}

const MeuComponenteReactComTSXComoFuncao: React.FC<MeuComponenteProps> = ({ mensagem }) => {
    return (
        <div>
            <h1>{mensagem}</h1>
            <p>Este é um exemplo de componente React com TypeScript (tsx) como função.</p>
        </div>
    );
};

export default MeuComponenteReactComTSXComoFuncao;
