import React from 'react';

// Componente React com ternários aninhados
const DeepIndentationReactComponent = ({ condition1, condition2, condition3 }) => {
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
