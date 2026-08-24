import { useState } from 'react';

function SerieForm({ onSalvar, seriesExistentes = [] }) {
  const [titulo, setTitulo] = useState('');
  const [temporadas, setTemporadas] = useState('');
  const [dataLancamento, setDataLancamento] = useState('');
  const [diretor, setDiretor] = useState('');
  const [produtora, setProdutora] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataAssistiu, setDataAssistiu] = useState('');
  const [imagem, setImagem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !titulo ||
      !temporadas ||
      !dataLancamento ||
      !diretor ||
      !produtora ||
      !categoria ||
      !dataAssistiu
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    // Verifica se já existe uma série com o mesmo título (ignorando maiúsculas/minúsculas)
    const jaExiste = seriesExistentes.some(
      (serie) => serie.titulo.trim().toLowerCase() === titulo.trim().toLowerCase()
    );

    if (jaExiste) {
      alert('Já existe uma série cadastrada com esse título!');
      return;
    }

    onSalvar({ titulo, temporadas, dataLancamento, diretor, produtora, categoria, dataAssistiu, imagem });

    setTitulo('');
    setTemporadas('');
    setDataLancamento('');
    setDiretor('');
    setProdutora('');
    setCategoria('');
    setDataAssistiu('');
    setImagem('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Título:
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </p>
      <p>
        Número de Temporadas:
        <input type="number" value={temporadas} onChange={(e) => setTemporadas(e.target.value)} />
      </p>
      <p>
        Data de Lançamento da Temporada:
        <input type="date" value={dataLancamento} onChange={(e) => setDataLancamento(e.target.value)} />
      </p>
      <p>
        Diretor:
        <input value={diretor} onChange={(e) => setDiretor(e.target.value)} />
      </p>
      <p>
        Produtora:
        <input value={produtora} onChange={(e) => setProdutora(e.target.value)} />
      </p>
      <p>
        Categoria:
        <input value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      </p>
      <p>
        Data em que assistiu:
        <input type="date" value={dataAssistiu} onChange={(e) => setDataAssistiu(e.target.value)} />
      </p>
      <p>
        URL da imagem (capa da série):
        <input value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="https://..." />
      </p>
      <button type="submit">Cadastrar Série</button>
    </form>
  );
}

export default SerieForm;