import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const ReactNativeComponentWithEffect = () => {
    useEffect(() => {
        console.log('Efeito 1');
        console.log('Efeito 2');
        console.log('Efeito 3');
        console.log('Efeito 4');
        console.log('Efeito 5');
        console.log('Efeito 6');
        console.log('Efeito 7');
        console.log('Efeito 8');
        console.log('Efeito 9');
        console.log('Efeito 10');
        console.log('Efeito 11');
        console.log('Efeito 12');
        console.log('Efeito 13');
        console.log('Efeito 14');
        console.log('Efeito 15');
        console.log('Efeito 16');
        console.log('Efeito 17');
        console.log('Efeito 18');
        console.log('Efeito 19');
        console.log('Efeito 20');
    }, []);

    return (
        <View>
            <Text>Conteúdo do componente React Native</Text>
        </View>
    );
};

export default ReactNativeComponentWithEffect;
