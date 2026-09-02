import { useState } from 'react';
import SerieForm from '../SerieForm/SerieForm';

 function SerieList({ series, onExcluir, onEditar }) {
   const [idEditando, setIdEditando] = useState(null);

   if (series.length === 0) return <p>Nenhuma série cadastrada ainda.</p>;

   return (
    <div>
      {series.map((serie) =>
        idEditando === serie.id ? (
          <SerieForm
            key={serie.id}
            serieParaEditar={serie}
            seriesExistentes={series}
            onSalvar={(s) => { onEditar(s); setIdEditando(null); }}
            onCancelar={() => setIdEditando(null)}
          />
        ) : (
          <div key={serie.id} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            {serie.imagem && <img src={serie.imagem} alt={serie.titulo} style={{ width: '50px', height: '70px', objectFit: 'cover' }} />}
            <span>- {serie.titulo} - {serie.temporadas} temporadas - {serie.dataLancamento} - {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.dataAssistiu}</span>
            <button onClick={() => setIdEditando(serie.id)}>Editar</button>
            <button onClick={() => onExcluir(serie.id)}>Excluir</button>
          </div>
        )
      )}
    </div>
  );
}

export default SerieList;