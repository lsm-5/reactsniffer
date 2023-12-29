import React from 'react';

// Interface para definir as propriedades do componente
interface MyComponentProps {
    title: string;
    description: string;
    // Adicione outras propriedades conforme necessário
}

// Componente funcional sem o uso de spread operator
const MyComponent: React.FC<MyComponentProps> = (props) => {
    // Extrair props individualmente
    const { title, description, children } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {/* Outras renderizações com as props */}
            {children}
        </div>
    );
};

// Exemplo de uso do componente
const App: React.FC = () => {
    const myProps: MyComponentProps = {
        title: 'Título do Componente',
        description: 'Descrição do componente',
        // Outras props personalizadas
    };

    return (
        <div>
            <MyComponent title={myProps.title} description={myProps.description}>
                <p>Conteúdo adicional dentro do componente.</p>
            </MyComponent>
        </div>
    );
};

export default App;
