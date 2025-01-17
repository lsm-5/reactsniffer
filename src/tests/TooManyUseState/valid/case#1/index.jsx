import React, { useState } from 'react';

const MeuComponente = () => {
    const [estado1, setEstado1] = useState('');
    const [estado2, setEstado2] = useState(0);
    const [estado3, setEstado3] = useState(false);
    const [estado4, setEstado4] = useState([]);
    const [estado5, setEstado5] = useState({});
    const [estado6, setEstado6] = useState(null);
    const [estado7, setEstado7] = useState('Texto Inicial');
    const [estado8, setEstado8] = useState(new Date());
    const [estado9, setEstado9] = useState(10);

    const modificarEstados = () => {
        setEstado1('Novo Valor para Estado 1');
        setEstado2((prevEstado2) => prevEstado2 + 1);
        setEstado3(!estado3);
        setEstado4(['Item 1', 'Item 2']);
        setEstado5({ chave: 'valor' });
        setEstado6('Algum valor');
        setEstado7('Texto Modificado');
        setEstado8(new Date());
        setEstado9(estado9 * 2);
    };

    return (
        <div>
            <p>Estado 1: {estado1}</p>
            <p>Estado 2: {estado2}</p>
            <p>Estado 3: {estado3 ? 'Verdadeiro' : 'Falso'}</p>
            <p>Estado 4: {JSON.stringify(estado4)}</p>
            <p>Estado 5: {JSON.stringify(estado5)}</p>
            <p>Estado 6: {estado6}</p>
            <p>Estado 7: {estado7}</p>
            <p>Estado 8: {estado8.toString()}</p>
            <p>Estado 9: {estado9}</p>

            <button onClick={modificarEstados}>Modificar Estados</button>
        </div>
    );
};

export default MeuComponente;
