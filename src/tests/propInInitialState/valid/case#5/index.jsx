// Implementação do Redux não mostrada aqui por brevidade
import { connect } from 'react-redux';

function MeuComponente({ estado }) {
    return (
        <div>
            <p>Estado: {estado}</p>
        </div>
    );
}

// Mapeia o estado Redux para as props do componente
const mapStateToProps = (state) => {
    return {
        estado: state.estado,
    };
};

export default connect(mapStateToProps)(MeuComponente);
