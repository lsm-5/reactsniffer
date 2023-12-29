import React, { useState, useEffect } from 'react';

const ReactComponentWithVariables = () => {
    // Uso de const
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Uso de let
        let isMounted = true;

        const incrementCount = () => {
            // Uso de var
            for (var i = 0; i < 5; i++) {
                console.log(i);
            }

            if (isMounted) {
                setCount((prevCount) => prevCount + 1);
            }
        };

        incrementCount();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <p>Conteúdo do componente React</p>
            <p>Contador: {count}</p>
        </div>
    );
};

export default ReactComponentWithVariables;
