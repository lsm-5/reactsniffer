// Arquivo: ExemploComponenteFormulario.js

import React, { useState } from 'react';

const ExemploComponenteFormulario = ({name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12, name13}) => {

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
