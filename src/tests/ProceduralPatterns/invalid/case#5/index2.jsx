import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ReactNativeComponentWithForLoop = () => {
    // Uso de const
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Operações com o uso do for
        const incrementCount = () => {
            for (let i = 0; i < 5; i++) {
                console.log(`Iteração ${i}`);
                setCount((prevCount) => prevCount + 1);
            }
        };

        incrementCount();

        // Limpando recursos no desmontagem do componente
        return () => {
            console.log('Componente desmontado. Limpando recursos...');
        };
    }, []);

    return (
        <View>
            <Text>Conteúdo do componente React Native</Text>
            <Text>Contador: {count}</Text>
        </View>
    );
};

export default ReactNativeComponentWithForLoop;
