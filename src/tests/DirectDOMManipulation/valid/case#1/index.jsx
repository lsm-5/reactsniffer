import React, { useState } from 'react';

const ReactGoodComponent = () => {
    // Utilizando o estado para controlar a classe do elemento
    const [elementClass, setElementClass] = useState('');

    // Função para manipular o estado e atualizar a classe do elemento
    const handleElementClick = () => {
        // Exemplo: alternar a classe do elemento entre 'highlighted' e ''
        setElementClass((prevClass) => (prevClass === 'highlighted' ? '' : 'highlighted'));
    };

    return (
        <div>
            <p>Um componente React sem manipulação direta do DOM</p>
            <div
                className={`element ${elementClass}`}
                onClick={handleElementClick}
            >
                Elemento Reactivo
            </div>
        </div>
    );
};

export default ReactGoodComponent;
