import SerieForm from '../components/SerieForm/SerieForm';

function CadastroSerie({ onAdicionar }) {
 return (
  <div style={{ textAlign: 'center'}}>
   <h1>Cadastrar séries</h1>
   <SerieForm onSalvar={onAdicionar} />
  </div>
 );
}

export default CadastroSerie;