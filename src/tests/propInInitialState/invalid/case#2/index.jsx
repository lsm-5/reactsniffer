import React, { useState } from 'react';

const MeuComponente = ({ minhaPropInicial }) => {
  const [estadoDaProp, setEstadoDaProp] = useState(minhaPropInicial);

  return (
      <div>
        <p>Valor da Propriedade no Estado Inicial: {estadoDaProp}</p>
      </div>
  );
};

export default MeuComponente;