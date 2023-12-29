import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const DetectorSmellComponent = () => {
    useEffect(() => {
        // Função para manipulação direta do DOM
        const handleDomManipulation = () => {
            // Exemplo: alterando o estilo de um componente com o nome de teste
            const targetComponent = document.getElementById('targetComponent');
            if (targetComponent) {
                targetComponent.style.backgroundColor = 'yellow';
            }
        };

        // Chamando a função de manipulação direta do DOM após o componente ser montado
        handleDomManipulation();
    }, []); // Certificando-se de que a função seja chamada apenas uma vez após a montagem do componente

    return (
        <View>
            <Text>Seu componente React Native</Text>
            <View id="targetComponent" style={{ padding: 10, margin: 10, borderWidth: 1, borderColor: 'black' }}>
                Componente de Destino
            </View>
        </View>
    );
};

export default DetectorSmellComponent;
