import React, { useEffect, useState } from 'react';

interface Props {
    message: string;
}

const ReactComponentWithEffectTSX: React.FC<Props> = ({ message }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Início do efeito');

        // Simulando operações complexas no useEffect
        for (let i = 0; i < 10; i++) {
            setCount((prevCount) => prevCount + 1);
        }

        // Operações assíncronas
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log('Dados da API:', data);
        };

        fetchData();

        console.log('Fim do efeito');

        // Limpando recursos no desmontagem do componente
        return () => {
            console.log('Componente desmontado. Limpando recursos...');
        };
    }, []); // O segundo argumento vazio indica que o efeito ocorre apenas uma vez, equivalente ao componentDidMount

    return (
        <div>
            <p>Conteúdo do componente React com TypeScript</p>
            <p>Mensagem: {message}</p>
            <p>Contador: {count}</p>
        </div>
    );
};

export default ReactComponentWithEffectTSX;
