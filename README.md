# 🌐 Rocket Notes


![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287790227-1d3aeb53-965c-4c66-b90c-403203a5226c.png) 

Rocket Notes é uma aplicação Back-End que permite o cadastro de usuários em um banco de dados, com a possibilidade de adicionar notas, links e tags, todos vinculados ao usuário.

Desenvolvido com Node.js, SQLite3 e diversas dependências como Express, Knex e Bcryptjs, essa aplicação oferece funcionalidades CRUD, autenticação e verificação de dados.

Projeto desenvolvido durante o curso Explorer oferecido pela RocketSeat.

## ⚙️ Funcionalidades


 ### ⭐ Cadastro e atualização de usuários com IDs únicos!

![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287793361-732acd6a-125a-4533-8df0-362de82c3341.png)

 ### ⭐ Criação, visualização e exclusão de notas, todas vinculadas aos usuários.
  
![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287793658-9f372a88-2101-4ed5-b1c6-e356b89ce4a3.png)

 ### ⭐ Verificação de cada etapa, com mensagens de erro personalizadas em caso de falha.
  
![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287793822-bdc319bc-09bd-42c9-9b8b-56ead77cab2a.png)

### 🧱 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com/)
- [Insomnia](https://insomnia.rest/)
- [BeeKeeper Studio](https://www.beekeeperstudio.io/)
- [SQLite3](https://www.sqlite.org/)

Além disso, é recomendado ter um editor de código como [VSCode](https://code.visualstudio.com/).

## 🎲 Rodando a aplicação

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

1. Clone este repositório:
    ```bash
    $ git clone https://github.com/dsouloficial/Rocket-Notes-Back-End
    ```

2. Instale as dependências:
    ```bash
    $ npm install
    ```

3. Configure o `package.json` para usar o **nodemon** e **Knex** para iniciar as migrações do banco de dados.

4. Rode as migrações:
    ```bash
    $ knex migrate:latest
    ```

5. Inicie a aplicação:
    ```bash
    $ npm start
    ```

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas no desenvolvimento do projeto:

- **JavaScript** - Linguagem principal.
- **Node.js** - Ambiente de execução para JavaScript no back-end.
- **Express** - Framework para criação do servidor.
- **Knex** - Biblioteca para construção e execução de queries SQL.
- **Bcryptjs** - Biblioteca para criptografia de senhas.
- **SQLite3** - Banco de dados utilizado para persistência dos dados.
- **Insomnia & BeeKeeper** - Ferramentas para testar APIs e gerenciar bancos de dados SQLite.

---

Feito com ❤️ durante o curso Explorer da RocketSeat.
