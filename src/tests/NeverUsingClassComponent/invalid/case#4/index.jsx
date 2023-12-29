import React, { Component } from 'react';

interface MeuComponenteProps {
    mensagem: string;
}

class MeuComponenteReactComTSXComoClasse extends Component<MeuComponenteProps> {
    render() {
        return (
            <div>
                <h1>{this.props.mensagem}</h1>
                <p>Este é um exemplo de componente React com TypeScript (tsx) como classe.</p>
            </div>
        );
    }
}

export default MeuComponenteReactComTSXComoClasse;
