import React, { useState, useEffect } from 'react';

interface Props {
    message: string;
}

const ReactComponentWithForLoopTSX: React.FC<Props> = ({ message }) => {
    // Uso de const
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Operações com o uso do for
        const incrementCount = () => {
            for (let i = 0; i < 5; i++) {
                console.log(`Iteração ${i}`);
                setCount((prevCount) => prevCount + 1);
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
            <p>Conteúdo do componente React com TypeScript</p>
            <p>Mensagem: {message}</p>
            <p>Contador: {count}</p>
        </div>
    );
};

export default ReactComponentWithForLoopTSX;
