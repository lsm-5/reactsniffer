import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Componente funcional sem o uso de spread operator
const MyReactNativeComponent = (props) => {
    // Extrair props individualmente
    const { title, description, onPress, children } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ padding: 10, backgroundColor: 'lightblue', borderRadius: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                <Text>{description}</Text>
                {/* Outras renderizações com as props */}
                {children}
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
            <MyReactNativeComponent
                title={myProps.title}
                description={myProps.description}
                onPress={myProps.onPress}
            >
                <Text>Conteúdo adicional dentro do componente.</Text>
            </MyReactNativeComponent>
        </View>
    );
};

export default App;
