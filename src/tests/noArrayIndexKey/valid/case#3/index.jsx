import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.reduce((a, b) => a.concat(<Foo key={b.id} />), [])}
        </div>
    );
};

export default MeuComponente;

