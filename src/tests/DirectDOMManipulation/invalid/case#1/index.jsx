import React, { useEffect } from 'react';

const DetectorSmellComponent = () => {
    useEffect(() => {
        // Função para manipulação direta do DOM
        const handleDomManipulation = () => {
            // Exemplo: alterando a cor de fundo de um elemento com ID 'targetElement'
            const targetElement = document.getElementById('targetElement');
            if (targetElement) {
                targetElement.style.backgroundColor = 'yellow';
            }
        };

        // Chamando a função de manipulação direta do DOM após o componente ser montado
        handleDomManipulation();
    }, []); // Certificando-se de que a função seja chamada apenas uma vez após a montagem do componente

    return (
        <div>
            <p>Seu componente React</p>
            <div id="targetElement">Elemento de Destino</div>
        </div>
    );
};

export default DetectorSmellComponent;
