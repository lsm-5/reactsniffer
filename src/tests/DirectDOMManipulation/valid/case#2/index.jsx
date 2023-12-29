import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReactNativeGoodComponent = () => {
    // Utilizando o estado para controlar a aparência do componente
    const [isHighlighted, setIsHighlighted] = useState(false);

    // Função para manipular o estado e alternar a aparência do componente
    const handlePress = () => {
        setIsHighlighted((prev) => !prev);
    };

    // Estilos condicionais com base no estado
    const containerStyle = isHighlighted ? styles.highlightedContainer : styles.container;
    const textStyle = isHighlighted ? styles.highlightedText : styles.normalText;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>Um componente React Native sem manipulação direta do DOM</Text>
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Clique aqui</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    highlightedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    normalText: {
        fontSize: 18,
        color: 'black',
    },
    highlightedText: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ReactNativeGoodComponent;
