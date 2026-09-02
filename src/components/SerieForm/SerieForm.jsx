import { useState, useEffect } from 'react';

const camposVazios = {
   titulo: '', temporadas: '', dataLancamento: '', diretor: '',
   produtora: '', categoria: '', dataAssistiu: '', imagem: '',
 };

 function SerieForm({ onSalvar, seriesExistentes = [], serieParaEditar = null, onCancelar }) {
   const [dados, setDados] = useState(camposVazios);

  useEffect(() => {
    if (serieParaEditar) setDados(serieParaEditar); 
  },  [serieParaEditar]);

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { titulo, temporadas, dataLancamento, diretor, produtora, categoria, dataAssistiu } = dados;

    if (!titulo || !temporadas || !dataLancamento || !diretor || !produtora || !categoria || !dataAssistiu) {
      alert('Preencha todos os campos!');
      return;
    }

    const duplicado = seriesExistentes.some(
      (s) => s.titulo.trim().toLowerCase() === titulo.trim().toLowerCase() && s.id !== serieParaEditar?.id
    );
    if (duplicado) {
      alert('Já existe uma série cadastrada com esse título!');
      return;
    }

    onSalvar({ ...dados, id: serieParaEditar?.id });
    if (!serieParaEditar) setDados(camposVazios);
  }

  const rotulos = {
    titulo: 'Título', temporadas: 'Número de Temporadas', dataLancamento: 'Data de Lançamento da Temporada',
    diretor: 'Diretor', produtora: 'Produtora', categoria: 'Categoria', dataAssistiu: 'Data em que assistiu', imagem: 'URL da imagem',
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(rotulos).map((campo) => (
        <p key={campo}>
          {rotulos[campo]}:
          <input
            type={campo.startsWith('data') ? 'date' : campo === 'temporadas' ? 'number' : 'text'}
            name={campo}
            value={dados[campo]}
            onChange={handleChange}
          />
        </p>
      ))}
      
      <button type="submit">{serieParaEditar ? 'Salvar Alterações' : 'Cadastrar Série'}</button>
      {serieParaEditar && <button type="button" onClick={onCancelar}>Cancelar</button>}
    </form>
  );
}

export default SerieForm;