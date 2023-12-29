import React, { useState, useEffect } from 'react';

interface MeuComponenteProps {
    texto: string;
}

const MeuComponenteReactComoFuncao: React.FC<MeuComponenteProps> = ({ texto }) => {
    const [estado, setEstado] = useState<number | undefined>(undefined);

    useEffect(() => {
        setEstado((prevEstado) => 35 * 55 * 5 * (prevEstado || 1));
    }, [estado]);

    return (
        <div>
            <h1>Componente React como Função</h1>
            <p>Este é um exemplo de componente React como função.</p>
            <p>{texto}</p>
            <p>Estado atual: {estado}</p>
        </div>
    );
};

export default MeuComponenteReactComoFuncao;
