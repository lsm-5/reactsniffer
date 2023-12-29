import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ReactNativeComponentWithoutForLoop = () => {
    // Uso de const
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Operações sem o uso do for
        const incrementCount = () => {
            let i = 0;
            while (i < 5) {
                console.log(`Iteração ${i}`);
                setCount((prevCount) => prevCount + 1);
                i++;
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

export default ReactNativeComponentWithoutForLoop;
