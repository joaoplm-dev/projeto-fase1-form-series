function SerieList({ series, onExcluir, onEditar }) {
  function handleEditar(serie) {
    const novoTitulo = prompt('Título:', serie.titulo);
    if (novoTitulo === null) return;

    const novaSerie = { ...serie, titulo: novoTitulo };
    onEditar(novaSerie);
  }

  if (series.length === 0) {
    return <p>Nenhuma série cadastrada ainda.</p>;
  }

  return (
    <div>
      {series.map((serie) => (
        <div key={serie.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
          {serie.imagem && (
            <img src={serie.imagem} alt={serie.titulo} style={{ width: '50px', height: '70px', objectFit: 'cover' }} />
          )}
          <span>
            - {serie.titulo} - {serie.temporadas} temporadas - {serie.dataLancamento} - {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.dataAssistiu}
          </span>
          <button onClick={() => handleEditar(serie)}>Editar</button>
          <button onClick={() => onExcluir(serie.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default SerieList;