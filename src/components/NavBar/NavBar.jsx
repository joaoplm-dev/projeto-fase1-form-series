function NavBar({ mudarPagina}) {
    return (
     <ul>
        <li><a href="#" onClick={() => mudarPagina('home')}>Página Inicial</a></li>
        <li><a href="#" onClick={() => mudarPagina('sobre')}>Sobre</a></li>
        <li><a href="#" onClick={() => mudarPagina('cadastrar')}>Cadastrar Série</a></li>
        <li><a href="#" onClick={() => mudarPagina('lista')}>Lista de Séries</a></li>
     </ul>
    );
}

export default NavBar;