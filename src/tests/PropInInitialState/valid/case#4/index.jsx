import React, { createContext, useContext, useState } from 'react';

const EstadoContext = createContext();

function MeuComponente() {
    const [estado, setEstado] = useState('Inicial');

    return (
        <EstadoContext.Provider value={{ estado, setEstado }}>
            <div>
                <p>Estado: {estado}</p>
            </div>
        </EstadoContext.Provider>
    );
}

// Em outro arquivo ou componente
function OutroComponente() {
    const { estado } = useContext(EstadoContext);

    return (
        <div>
            <p>Estado em outro componente: {estado}</p>
        </div>
    );
}