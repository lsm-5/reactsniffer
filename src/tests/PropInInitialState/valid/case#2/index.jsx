import React from 'react';

class MeuComponente extends React.Component {
    constructor() {
        super();
        this.state = { estado: 'Inicial' };
    }

    render() {
        return (
            <div>
                <p>Estado: {this.state.estado}</p>
            </div>
        );
    }
}