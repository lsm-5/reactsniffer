import React from 'react';

class MeuComponente extends React.Component {
    constructor() {
        super();
        this.state = { estado: 'Inicial' };
    }

    componentDidMount() {
        // Lógica adicional, se necessário
        console.log('Componente montado. Estado inicial configurado.');
    }

    render() {
        return (
            <div>
                <p>Estado: {this.state.estado}</p>
            </div>
        );
    }
}
