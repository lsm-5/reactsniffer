import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.map((baz, i) => React.cloneElement(someChild, { ...someChild.props, key: i }))}
        </div>
    );
};

export default MeuComponente;

