import React, { useMemo } from 'react';

function MeuComponente() {
    const estado = useMemo(() => 'Inicial', []);

    return (
        <div>
            <p>Estado: {estado}</p>
        </div>
    );
}
