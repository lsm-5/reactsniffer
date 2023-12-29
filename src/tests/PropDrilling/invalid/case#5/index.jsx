import React from 'react';
import ChildComponent from './ChildComponent'; // Certifique-se de importar o componente ChildComponent corretamente

const Component = ({ onClick }) => {
    return <ChildComponent onClick={onClick} />;
};

export default Component;
