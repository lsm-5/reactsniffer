import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo?.map(child => <Foo key={child.i} />)}
        </div>
    );
};

export default MeuComponente;

