import React, { useState } from 'react';

const MeuComponente = (props) => {
  const [estadoDaProp, setEstadoDaProp] = useState(props.minhaPropInicial);

  return (
    <div>
      <p>Valor da Propriedade no Estado Inicial: {estadoDaProp}</p>
    </div>
  );
};

export default MeuComponente;