// Arquivo: ExemploReactNativeSemJSXForaRender2.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    const numeros = [1, 2, 3, 4, 5];

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Números:</Text>
            <View>
                {numeros.map(numero => (
                    <Text key={numero}>{numero}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
    },
});

export default App;
