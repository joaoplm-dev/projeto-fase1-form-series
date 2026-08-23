import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import CadastroSerie from './pages/CadastroSerie';
import ListaSerie from './pages/ListaSerie';

function App(){
  const [pagina, setPagina] = useState('home');

  const [series, setSeries] = useState([
    {
      id: 1,
      titulo: 'La Casa de Papel',
      temporadas: 3,
      dataLancamento: '2020-05-20',
      diretor: 'Álex Pina',
      produtora: 'Netflix',
      categoria: 'Drama',
      dataAssistiu: '2021-05-10',
    },
  ]);

  function adicionarSerie(serie){
    setSeries([...series,{ ...serie, id: Date.now()}]);
  }
 
 function excluirSerie(id){
  setSeries(series.filter((s) => s.id !== id));
 }
 
 function editarSerie(serieAtualizada){
  setSeries(series.map((s) => (s.id === serieAtualizada.id ? serieAtualizada : s)));
 }

 return (
  <div>
    <NavBar mudarPagina={setPagina} />
    
    {pagina === 'home' && <Home />}
    {pagina === 'sobre' && <Sobre />}
    {pagina === 'cadastrar' && <CadastroSerie onAdicionar={adicionarSerie}/>}
    {pagina === 'lista' && (
      <ListaSerie series={series} onExcluir={excluirSerie} onEditar={editarSerie}/>

    )} 

  </div>
 );
}

export default App;