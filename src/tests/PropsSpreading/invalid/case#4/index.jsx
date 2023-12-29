import React from 'react';

// Interface para definir as propriedades do componente
interface MyComponentProps {
    title: string;
    description: string;
    // Adicione outras propriedades conforme necessário
}

// Componente funcional que utiliza o spread de props
const MyComponent: React.FC<MyComponentProps> = ({ title, description, children, ...otherProps }) => {
    return (
        <div {...otherProps}>
            <h1>{title}</h1>
            <p>{description}</p>
            {/* Outras renderizações com as props restantes */}
            {children}
        </div>
    );
};

// Exemplo de uso do componente
const App: React.FC = () => {
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
            <MyComponent {...myProps}>
                <p>Conteúdo adicional dentro do componente.</p>
            </MyComponent>
        </div>
    );
};

export default App;
