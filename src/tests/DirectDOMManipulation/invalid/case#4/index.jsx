import React, { useEffect } from 'react';

const SmellyComponent = () => {
    useEffect(() => {
        // Smell: Manipulação direta do DOM dentro do useEffect
        const handleDomManipulation = () => {
            // Exemplo: alterando diretamente a classe de um elemento com ID 'smellyElement'
            const smellyElement = document.getElementById('smellyElement');
            if (smellyElement) {
                smellyElement.className = 'smellyStyle';
            }
        };

        // Chamando a função de manipulação direta do DOM após o componente ser montado
        handleDomManipulation();
    }, []); // Certificando-se de que a função seja chamada apenas uma vez após a montagem do componente

    return (
        <div>
            <p>Um componente React com "smell" de manipulação direta do DOM</p>
            <div id="smellyElement">Elemento com "smell"</div>
        </div>
    );
};

export default SmellyComponent;
