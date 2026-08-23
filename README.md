Formulário Série Journal

Projeto desenvolvido para a disciplina Desenvolvimento de Sistemas Frontend do curso de ADS.

O objetivo do projeto é gerenciar séries assistidas, permitindo cadastrar, listar, editar e excluir séries de forma simples, utilizando React.

Como executar o projeto
Instale as dependências:

 No terminal:
 npm install

Rode o projeto em modo de desenvolvimento:
npm run dev

Abra o endereço mostrado no terminal (geralmente http://localhost:5173) no navegador.


Screenshots do projeto

![alt text](Página Incial.png)
![alt text](Sobre.png)
![alt text](Cadastrar Séries.png)
![alt text](Lista de Séries.png)
![alt text](Editar.png) //editando Título na Lista




Estrutura do projeto
src/
  components/
    NavBar/       -> menu de navegação
    SerieForm/     -> formulário de cadastro de séries
    SerieList/     -> listagem das séries cadastradas
  pages/
    Home.jsx           -> página inicial
    Sobre.jsx           -> página informativa sobre o projeto
    CadastroSerie.jsx   -> página que exibe o formulário de cadastro
    ListaSerie.jsx      -> página que exibe a lista de  séries
  App.jsx        -> componente principal, guarda o estado da lista de séries e controla qual página é exibida
  main.jsx       -> ponto de entrada do React

Descrição dos componentes

NavBar: exibe os links de navegação (Página Inicial, Sobre, Cadastrar Séries, Lista de Séries). Ao clicar em um link, troca a página exibida através de uma função recebida via props.

SerieForm: formulário para cadastro de novas séries. Contém os campos Título, Número de Temporadas, Data de Lançamento da Temporada, Diretor, Produtora, Categoria e Data em que assistiu. Faz uma validação simples verificando se todos os campos foram preenchidos antes de enviar, mostrando um alerta caso algum esteja vazio.

SerieList: recebe a lista de séries via props e exibe cada uma delas na tela, junto com os botões Editar (que abre uma janela para alterar o título da série) e Excluir (que remove a série da lista).


Decisões de desenvolvimento

O projeto foi criado com Vite, por ser mais rápido e simples de configurar que o Create React App.

Não foi utilizada nenhuma biblioteca de rotas (como o react-router). A troca de páginas é feita de forma simples, guardando em uma variável de estado (useState) qual página está ativa no momento.

Os dados das séries são guardados apenas em memória (estado do React), sem um banco de dados ou API — conforme o escopo da fase 1 do projeto.

A edição das séries foi feita de forma simples, utilizando uma janela de prompt() do navegador para alterar o título, evitando um segundo formulário completo nesta fase.