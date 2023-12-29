import React from 'react';
import ChildComponent from './ChildComponent'; // Certifique-se de importar o componente ChildComponent corretamente

const Component = ({ propDrilling }) => {
    return <ChildComponent prop={true ? propDrilling : propDrilling} />;
};

export default Component;
