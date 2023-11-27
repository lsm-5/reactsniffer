import React, { useState, useEffect } from 'react';

function useMeuEstadoInicial() {
    const [estado, setEstado] = useState('Inicial');

    useEffect(() => {
        // Lógica adicional, se necessário
        console.log('Estado inicial configurado.');
    }, []);

    return { estado, setEstado };
}

function MeuComponente() {
    const { estado } = useMeuEstadoInicial();

    return (
        <div>
            <p>Estado: {estado}</p>
        </div>
    );
}
