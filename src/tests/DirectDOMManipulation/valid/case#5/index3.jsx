import React, { useState } from 'react';

const ReactGoodComponent = () => {
    // Utilizando o estado para controlar o conteúdo do componente
    const [content, setContent] = useState('Clique no botão para alterar o conteúdo.');

    // Função para manipular o estado e alterar o conteúdo
    const handleButtonClick = () => {
        setContent('Conteúdo alterado!');
    };

    return (
        <div>
            <p>{content}</p>
            <button onClick={handleButtonClick}>Clique aqui</button>
        </div>
    );
};

export default ReactGoodComponent;
