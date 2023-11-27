import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.reduceRight((a, b, i) => a.concat(<Foo key={b.id} />), [])}
        </div>
    );
};

export default MeuComponente;

