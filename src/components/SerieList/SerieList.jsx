function SerieList({ series, onExcluir, onEditar }) {
    function handleEditar(serie) {
        const novoTitulo = prompt('Título', serie.titulo);
        if (novoTitulo === null) return; //cancela se vazio.

        const novaSerie = { ...serie, titulo: novoTitulo};
        onEditar(novaSerie);
    }
   return (
    <div style={{textAlign: 'center'}}>
         <h1>Lista de séries</h1>
        {series.map((serie) => (
            <div key={serie.id}>
              - {serie.titulo} - {serie.temporadas} temporadas - {serie.dataLancamento} - {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.dataAssistiu}
           <button onClick={() => handleEditar(serie)}>Editar</button>
           <button onClick={() => onExcluir(serie.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default SerieList;