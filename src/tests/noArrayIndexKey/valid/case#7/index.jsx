import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            { Children.forEach(this.props.children, (child, index, arr) => {
                return React.cloneElement(child, { key: child.id });
            })}
        </div>
    );
};

export default MeuComponente;

