import React from 'react';

// Componente funcional que utiliza o spread de props
const MyComponent = ({ title, description, ...otherProps }) => {
    return (
        <div {...otherProps}>
            <h1>{title}</h1>
            <p>{description}</p>
            {/* Outras renderizações com as props restantes */}
        </div>
    );
};

// Exemplo de uso do componente
const App = () => {
    const myProps = {
        title: 'Título do Componente',
        description: 'Descrição do componente',
        className: 'my-custom-class',
        onClick: () => {
            console.log('Clicou no componente!');
        },
        // Outras props personalizadas
    };

    return (
        <div>
            <MyComponent {...myProps} />
        </div>
    );
};

export default App;
