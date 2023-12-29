import React from 'react';
import ChildComponent from './ChildComponent'; // Certifique-se de importar o componente ChildComponent corretamente

// Componente A
const ComponentA = ({ data }) => (
    <div>
        <h1>Component A</h1>
        <h6 data={data} />
    </div>
);

// Componente B
const ComponentB = ({ data }) => (
    <div>
        <h2>Component B</h2>
        <h6 data={data} />
    </div>
);

// Componente C
const ComponentC = ({ data }) => (
    <div>
        <h3>Component C</h3>
        <h6 data={data} />
    </div>
);

// Componente D
const ComponentD = ({ data }) => (
    <div>
        <h4>Component D</h4>
        <h6 data={data} />
    </div>
);


const Component = ({ data }) => {
    return <h1>{data}</h1>;
};

export default Component;
