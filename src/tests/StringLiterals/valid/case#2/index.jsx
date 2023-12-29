import React from 'react';
import { View, Text } from 'react-native';

const MeuComponenteReactNative = () => {
    const condicao = false;

    if (condicao) {
        return (
            <View>
                <Text>A condição é verdadeira!</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Text>A condição é falsa.</Text>
            </View>
        );
    }
};

export default MeuComponenteReactNative;
