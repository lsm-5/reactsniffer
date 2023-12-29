import React, { useState, useEffect } from 'react';

const MeuComponenteReactComoFuncao: React.FC = () => {
    const [estado, setEstado] = useState<number | undefined>(undefined);

    useEffect(() => {
        setEstado( 35 * 55 * 5 * (estado || 1));
    }, [estado]);

    return (
        <div>
            <h1>Componente React como Função</h1>
            <p>Este é um exemplo de componente React como função.</p>
            <p>Estado atual: {estado}</p>
        </div>
    );
};

export default MeuComponenteReactComoFuncao;
