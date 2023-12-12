import React from 'react';

function useMeuEstadoInicial() {
    const [estado, setEstado] = React.useState('Inicial');
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
