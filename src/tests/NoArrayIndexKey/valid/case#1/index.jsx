import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            <Foo key="foo" />;
            <Foo key={i} />;
            <Foo key />;
            <Foo key={`foo-${i}`} />
            {foo.bar((baz, i) => <Foo key={i} />)}
            {foo.bar((bar, i) => <Foo key={`foo-${i}`} />)}
            {foo.map((baz) => <Foo key={baz.id} />)}
            {foo.map((baz, i) => <Foo key={baz.id} />)}
            {foo.map((baz, i) => React.cloneElement(someChild, {...someChild.props}))}
            {foo.map((baz, i) => cloneElement(someChild, {...someChild.props}))}
        </div>
    );
};

export default MeuComponente;

