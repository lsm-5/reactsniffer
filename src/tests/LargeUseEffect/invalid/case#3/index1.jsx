import React, { useState, useEffect } from 'react';

const MyComponentWithEffect = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulando uma requisição assíncrona (pode ser uma chamada a uma API, por exemplo)
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            }
        };

        // Chamando a função fetchData no montagem do componente
        fetchData();

        // Limpando recursos no desmontagem do componente
        return () => {
            console.log('Componente desmontado. Limpando recursos...');
        };

        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
        console.log("fim do use effect")
    }, []); // O segundo argumento vazio indica que o efeito ocorre apenas uma vez, equivalente ao componentDidMount

    return (
        <div>
            <h1>Dados do Componente:</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyComponentWithEffect;
