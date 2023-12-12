import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.map((bar, i) => <Foo key={i} />)}
            {[{}, {}].map((bar, i) => <Foo key={i} />)}
            {foo.reduce((a, b, i) => a.concat(<Foo key={i} />), [])}
            {foo.flatMap((a, i) => <Foo key={i} />)}
            {foo.reduceRight((a, b, i) => a.concat(<Foo key={i} />), [])}
        </div>
    );
};

export default MeuComponente;

