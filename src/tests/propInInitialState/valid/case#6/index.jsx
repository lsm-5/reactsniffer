import React, { createContext, useContext, useReducer } from 'react';

const EstadoContext = createContext();

const reducer = (estado, action) => {
    switch (action.type) {
        case 'atualizar':
            return action.payload;
        default:
            return estado;
    }
};

function MeuComponente() {
    const [estado, dispatch] = useReducer(reducer, 'Inicial');

    return (
        <EstadoContext.Provider value={{ estado, dispatch }}>
            <div>
                <p>Estado: {estado}</p>
            </div>
        </EstadoContext.Provider>
    );
}

// Em outro arquivo ou componente
function OutroComponente() {
    const { estado, dispatch } = useContext(EstadoContext);

    // Exemplo de como atualizar o estado em outro componente
    const handleClick = () => {
        dispatch({ type: 'atualizar', payload: 'Novo Estado' });
    };

    return (
        <div>
            <p>Estado em outro componente: {estado}</p>
            <button onClick={handleClick}>Atualizar Estado</button>
        </div>
    );
}
