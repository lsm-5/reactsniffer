// Arquivo: ExemploReactNativeSemJSXForaRender4.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    const items = ["Item 1", "Item 2", "Item 3"];

    const onPressItem = item => {
        console.log(`Item selecionado: ${item}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Itens:</Text>
            {items.map(item => (
                <TouchableOpacity key={item} onPress={() => onPressItem(item)}>
                    <Text style={styles.item}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        marginBottom: 5,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default App;
