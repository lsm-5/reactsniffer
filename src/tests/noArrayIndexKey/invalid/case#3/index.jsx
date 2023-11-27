import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.map((bar, i) => <Foo key={`foo-${i}`} />)}
        </div>
    );
};

export default MeuComponente;

