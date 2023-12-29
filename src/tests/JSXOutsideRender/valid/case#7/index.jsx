// Arquivo: ExemploReactNativeSemJSXForaRender1.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    const mensagem = "Bem-vindo ao exemplo React Native";

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{mensagem}</Text>
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
