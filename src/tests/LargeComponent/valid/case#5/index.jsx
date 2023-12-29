// Arquivo: ExemploReactComMaisDe218Linhas.js

import React, { useState, useEffect } from 'react';

const ExemploReactComMaisDe218Linhas = () => {
    const [contador, setContador] = useState(0);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        // Simulação de uma requisição assíncrona para buscar dados
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const json = await response.json();
                setDados(json);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>
            +

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>
            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>

            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>
            <h1>Exemplo React com Mais de 218 Linhas</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>


            <h2>Dados Obtidos da API:</h2>
            <ul>
                {dados.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExemploReactComMaisDe218Linhas;
