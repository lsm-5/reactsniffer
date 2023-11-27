import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.map((bar, anything) => <Foo key={anything} />)}
            {Children.map(this.props.children, (child, index) => {
                return React.cloneElement(child, { key: index });
            })}
        </div>
    );
};

export default MeuComponente;

