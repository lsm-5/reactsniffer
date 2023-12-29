import React from 'react';
import { View, Text } from 'react-native';

// Componente React Native com ternários aninhados
const DeepIndentationReactNativeComponent = ({ condition1, condition2, condition3 }) => {
    return (
        <View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Título do Componente</Text>
            </View>
            {condition1
                ? condition2
                    ? condition3
                        ? <Text>Condição 1, Condição 2, Condição 3 verdadeiras</Text>
                        : <Text>Condição 1, Condição 2 verdadeiras, Condição 3 falsa</Text>
                    : <Text>Condição 1 verdadeira, Condição 2 falsa</Text>
                : <View>
                    <Text>Condição 1 falsa</Text>
                </View>
            }
        </View>
    );
};

export default DeepIndentationReactNativeComponent;
