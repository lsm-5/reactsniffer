import React from 'react';

// Interface para definir as propriedades do componente
interface DeepIndentationReactComponentProps {
    condition1: boolean;
    condition2: boolean;
    condition3: boolean;
}

// Componente React em TypeScript com ternários aninhados
const DeepIndentationReactComponent: React.FC<DeepIndentationReactComponentProps> = ({
                                                                                         condition1,
                                                                                         condition2,
                                                                                         condition3,
                                                                                     }) => {
    return (
        <div>
            <header>
                <h1>Título do Componente</h1>
            </header>
            {condition1
                ? condition2
                    ? condition3
                        ? <p>Condição 1, Condição 2, Condição 3 verdadeiras</p>
                        : <p>Condição 1, Condição 2 verdadeiras, Condição 3 falsa</p>
                    : <p>Condição 1 verdadeira, Condição 2 falsa</p>
                : <footer>
                    <p>Condição 1 falsa</p>
                </footer>
            }
        </div>
    );
};

export default DeepIndentationReactComponent;
