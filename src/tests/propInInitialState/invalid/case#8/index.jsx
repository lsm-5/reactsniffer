import React, { Component } from 'react';

class SeuComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: props.inputValue,
        };
        // Preserve the initial state in a new object
        this.baseState = { ...this.state };
    }

    render() {
        return (
            <div>
                {/* Seu conteúdo JSX aqui */}
            </div>
        );
    }
}

export default SeuComponente;