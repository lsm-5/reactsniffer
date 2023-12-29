import React from 'react';
import { View, Text } from 'react-native';

// Componente React Native com aninhamento profundo e estrutura condicional
const DeepIndentationReactNativeComponent = ({ condition1, condition2 }) => {
    return (
        <View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Título do Componente</Text>
            </View>
            {condition1 && (
                <View>
                    <View>
                        <Text>Parágrafo 1</Text>
                        {condition2 && (
                            <View>
                                <Text>Parágrafo 2</Text>
                            </View>
                        )}
                    </View>
                </View>
            )}
            {condition1 ? (
                <View>
                    {/* Conteúdo se condition1 for verdadeira */}
                    {condition2 ? (
                        <View>
                            {/* Conteúdo se condition2 for verdadeira */}
                        </View>
                    ) : (
                        <View>
                            {/* Conteúdo se condition2 for falsa */}
                        </View>
                    )}
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
