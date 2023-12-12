import React from 'react';

const MeuComponente = (props) => {
    return (
        <div>
            {foo.map((item, i) => {
                return React.cloneElement(someChild, {
                    key: item.id
                })
            })}
        </div>
    );
};

export default MeuComponente;

