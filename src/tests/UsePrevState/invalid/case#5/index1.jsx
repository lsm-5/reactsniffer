import React from 'react';

const MeuComponenteReactComoFuncao = () => {
    const [estado, setEstado] = useState();

    useEffect(() => {
        setEstado(35*55*5*estado)
    },[])


    return (
        <div>
            <h1>Componente React como Função</h1>
            <p>Este é um exemplo de componente React como função.</p>
        </div>
    );
};

export default MeuComponenteReactComoFuncao;
