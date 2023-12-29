import React from 'react';

// Componente React com ternários aninhados
const DeepIndentationReactComponent = ({ condition1, condition2 }) => {
    return (
        <div>
            <header>
                <h1>Título do Componente</h1>
            </header>
            {condition1 ? (
                <section>
                    <div>
                        {condition2 ? (
                            <p>Parágrafo 1, condição 2 verdadeira</p>
                        ) : (
                            <p>Parágrafo 1, condição 2 falsa</p>
                        )}
                    </div>
                </section>
            ) : (
                <footer>
                    <p>Rodapé do Componente</p>
                </footer>
            )}
        </div>
    );
};

export default DeepIndentationReactComponent;
