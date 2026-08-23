import { useState } from 'react';

function SerieForm({ onSalvar }) {
  const [titulo, setTitulo] = useState('');
  const [temporadas, setTemporadas] = useState('');
  const [dataLancamento, setDataLancamento] = useState('');
  const [diretor, setDiretor] = useState('');
  const [produtora, setProdutora] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataAssistiu, setDataAssistiu] = useState(''); 
 
function handleSubmit(e){
    e.preventDefault();

if (!titulo || !temporadas || !dataLancamento || !diretor || !produtora || !categoria || !dataAssistiu) {
    alert('Preencha todos os campos!');
}

  onSalvar({ titulo, temporadas, dataLancamento, diretor, produtora, categoria, dataAssistiu});

  //limpa o formulário
  setTitulo('');
  setTemporadas('');
  setDataLancamento('');
  setDiretor('');
  setProdutora('');
  setCategoria('');
  setDataAssistiu('');
}


return (
    <form onSubmit={handleSubmit}>
      <p>Título : <input value={titulo} onChange={(e) => setTitulo(e.target.value)} /></p>
      <p>Número de Temporadas : <input type="number" value={temporadas} onChange={(e) => setTemporadas(e.target.value)} /></p>
      <p>Data de Lançamento : <input type="date" value={dataLancamento} onChange={(e) => setDataLancamento(e.target.value)} /></p>
      <p>Diretor : <input value={diretor} onChange={(e) => setDiretor(e.target.value)} /></p>
      <p>Produtora : <input value={produtora} onChange={(e) => setProdutora(e.target.value)} /></p>
      <p>Categoria : <input value={categoria} onChange={(e) => setCategoria(e.target.value)} /></p>
      <p>Data em que assistiu : <input type="date" value={dataAssistiu} onChange={(e) => setDataAssistiu(e.target.value)} /></p>
      <button type="submit">Cadastrar Série</button>
    </form>
  );
}

export default SerieForm;






