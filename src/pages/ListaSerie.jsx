import SerieList from '../components/SerieList/SerieList';

function ListaSerie({ series, onExcluir, onEditar }) {
  return <SerieList series={series} onExcluir={onExcluir} onEditar={onEditar} />;
}

export default ListaSerie;