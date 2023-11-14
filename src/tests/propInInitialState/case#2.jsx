import React, { Component } from 'react';

class MeuComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'John',
        age: 25,
      },
      // Outras propriedades do estado
    };
  }

  render() {
    return <div>Conteúdo do componente</div>;
  }
}

export default MeuComponente;