// Arquivo: ExemploReactNativeSemJSXForaRender3.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    const link = "https://www.exemplo.com";

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Visite nosso site:</Text>
            <Text style={styles.link} onPress={() => console.log("Link pressionado")}>{link}</Text>
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
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default App;
