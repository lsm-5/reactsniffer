import React, { useState, useEffect } from 'react';

const ReactComponentWithoutLetVar = () => {
    // Uso de const
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Operações sem o uso de let ou var
        const incrementCount = () => {
            // Loop sem o uso de var ou let
            for (const i of Array(5).keys()) {
                console.log(i);
            }

            // Atualização de estado usando const
            setCount((prevCount) => prevCount + 1);
        };

        incrementCount();

        // Limpando recursos no desmontagem do componente
        return () => {
            console.log('Componente desmontado. Limpando recursos...');
        };
    }, []);

    return (
        <div>
            <p>Conteúdo do componente React</p>
            <p>Contador: {count}</p>
        </div>
    );
};

export default ReactComponentWithoutLetVar;
