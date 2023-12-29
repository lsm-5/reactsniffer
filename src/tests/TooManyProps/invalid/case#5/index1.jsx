// Arquivo: ExemploComponenteFormulario.js

import React, { useState } from 'react';

const ExemploComponenteFormulario = ({name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12, name13, name14, name15, name16}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [idade, setIdade] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMensagemChange = (event) => {
        setMensagem(event.target.value);
    };

    const handleIdadeChange = (event) => {
        setIdade(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para lidar com o envio do formulário
    };

    return (
        <div>
            <h1>Formulário de Contato</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={handleNomeChange}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange}/>
                </label>
                <br/>
                <label>
                    Mensagem:
                    <textarea value={mensagem} onChange={handleMensagemChange}/>
                </label>
                <br/>
                <label>
                    Idade:
                    <input type="number" value={idade} onChange={handleIdadeChange}/>
                </label>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ExemploComponenteFormulario;
