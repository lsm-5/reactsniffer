import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MeuComponenteReactComoFuncao: React.FC = () => {
    const [estado, setEstado] = useState<number | undefined>(undefined);

    useEffect(() => {
        setEstado((prevEstado) => 35 * 55 * 5 * (prevEstado || 1));
    }, [estado]);

    return (
        <View>
            <Text>Componente React como Função</Text>
            <Text>Este é um exemplo de componente React como função.</Text>
            <Text>Estado atual: {estado}</Text>
        </View>
    );
};

export default MeuComponenteReactComoFuncao;
