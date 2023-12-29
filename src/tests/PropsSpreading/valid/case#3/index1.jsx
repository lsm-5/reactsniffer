import React from 'react';

// Componente funcional sem o uso de spread operator
const MyComponent = (props) => {
    // Extrair props individualmente
    const { title, description, className, onClick, children } = props;

    return (
        <div className={className} onClick={onClick}>
            <h1>{title}</h1>
            <p>{description}</p>
            {/* Outras renderizações com as props */}
            {children}
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
            <MyComponent
                title={myProps.title}
                description={myProps.description}
                className={myProps.className}
                onClick={myProps.onClick}
            >
                <p>Conteúdo adicional dentro do componente.</p>
            </MyComponent>
        </div>
    );
};

export default App;
