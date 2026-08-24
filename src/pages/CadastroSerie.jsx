import SerieForm from '../components/SerieForm/SerieForm';

function CadastroSerie({ onAdicionar, series }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Cadastrar séries</h1>
      <SerieForm onSalvar={onAdicionar} seriesExistentes={series} />
    </div>
  );
}

export default CadastroSerie;