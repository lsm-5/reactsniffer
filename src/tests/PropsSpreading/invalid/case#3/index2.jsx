import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Componente funcional que utiliza o spread de props
const MyReactNativeComponent = ({ title, description, ...otherProps }) => {
    return (
        <TouchableOpacity {...otherProps}>
            <View style={{ padding: 10, backgroundColor: 'lightblue', borderRadius: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                <Text>{description}</Text>
                {/* Outras renderizações com as props restantes */}
            </View>
        </TouchableOpacity>
    );
};

// Exemplo de uso do componente
const App = () => {
    const myProps = {
        title: 'Título do Componente',
        description: 'Descrição do componente',
        onPress: () => {
            console.log('Pressionou o componente!');
        },
        // Outras props personalizadas
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MyReactNativeComponent {...myProps} />
        </View>
    );
};

export default App;
