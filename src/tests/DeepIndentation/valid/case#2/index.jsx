import React from 'react';
import { View, Text } from 'react-native';

// Componente React Native com ternários aninhados
const DeepIndentationReactNativeComponent = ({ condition1, condition2 }) => {
    return (
        <View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Título do Componente</Text>
            </View>
            {condition1 ? (
                <View>
                    <View>
                        {condition2 ? (
                            <Text>Parágrafo 1, condição 2 verdadeira</Text>
                        ) : (
                            <Text>Parágrafo 1, condição 2 falsa</Text>
                        )}
                    </View>
                </View>
            ) : (
                <View>
                    <Text>Rodapé do Componente</Text>
                </View>
            )}
        </View>
    );
};

export default DeepIndentationReactNativeComponent;
