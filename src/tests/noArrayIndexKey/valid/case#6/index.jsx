import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {React.Children.map(this.props.children, (child, index, arr) => {
                return React.cloneElement(child, { key: child.id });
            })}
        </div>
    );
};

export default MeuComponente;

