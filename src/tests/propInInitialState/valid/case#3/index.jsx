import React, { useRef, useEffect } from 'react';

function MeuComponente() {
    const estadoRef = useRef('Inicial');

    useEffect(() => {
        console.log('Estado atual:', estadoRef.current);
    }, []);

    return (
        <div>
            <p>Estado: {estadoRef.current}</p>
        </div>
    );
}