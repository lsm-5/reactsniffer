import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ReactNativeComponentWithoutLetVar = () => {
    // Uso de const
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Operações sem o uso de let ou var
        const incrementCount = () => {
            // Loop sem o uso de var ou let
            for (const i of Array(5).keys()) {
                console.log(i);
            }

            // Atualização de estado usando const
            setCount((prevCount) => prevCount + 1);
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

export default ReactNativeComponentWithoutLetVar;
