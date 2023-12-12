import React, { useState } from 'react';

function MeuComponente() {
    const [estado, setEstado] = useState('Inicial');

    return (
        <div>
            <p>Estado: {estado}</p>
        </div>
    );
}