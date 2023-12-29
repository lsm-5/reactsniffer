import React, { useState, useEffect } from 'react';

const ReactComponentWithoutForLoop = () => {
    // Uso de const
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Operações sem o uso do for
        const incrementCount = () => {
            let i = 0;
            while (i < 5) {
                console.log(`Iteração ${i}`);
                setCount((prevCount) => prevCount + 1);
                i++;
            }
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

export default ReactComponentWithoutForLoop;
