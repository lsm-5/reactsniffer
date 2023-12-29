import React from 'react';
import { View, Text } from 'react-native';

const MeuComponenteReactNative = () => {
    const minhaString = 'React Native';

    if (minhaString === 'React Native') {
        return (
            <View>
                <Text>String é igual a React Native!</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Text>String não é igual a React Native.</Text>
            </View>
        );
    }
};

export default MeuComponenteReactNative;
