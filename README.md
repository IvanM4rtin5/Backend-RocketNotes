# 🌐 Rocket Notes Backend

[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-SQLite3-003B57?logo=sqlite)](https://www.sqlite.org/)
[![Framework](https://img.shields.io/badge/Framework-Express-000000?logo=express)](https://expressjs.com/)
[![Dependencies](https://img.shields.io/badge/Dependencies-Knex%20%7C%20Bcryptjs-FF6F61?logo=npm)](https://www.npmjs.com/)

Rocket Notes Backend é uma aplicação desenvolvida com Node.js que permite o cadastro de usuários, criação de notas, links e tags, todos vinculados a um usuário específico. O projeto utiliza SQLite3 como banco de dados e Express como framework para o servidor, além de bibliotecas como Knex e Bcryptjs para gerenciamento de queries e criptografia de senhas.

Projeto desenvolvido durante o curso Explorer oferecido pela @Rocketseat.

## 🖼️ Demonstração
![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287790227-1d3aeb53-965c-4c66-b90c-403203a5226c.png) 


## ⚙️ Funcionalidades

### ⭐ Cadastro e Atualização de Usuários
Cadastro de usuários com IDs únicos.

Atualização de informações do usuário, incluindo avatar.

![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287793361-732acd6a-125a-4533-8df0-362de82c3341.png)

### ⭐ Criação, Visualização e Exclusão de Notas
Criação de notas vinculadas a usuários.

Visualização e exclusão de notas.

![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287793658-9f372a88-2101-4ed5-b1c6-e356b89ce4a3.png)

### ⭐ Verificação e Mensagens de Erro Personalizadas
Verificação de cada etapa do processo.

Mensagens de erro personalizadas em caso de falha.

![Image](https://github.com/IvanM4rtin5/Backend-Notes/blob/main/assets/images/287793822-bdc319bc-09bd-42c9-9b8b-56ead77cab2a.png)


## 🛠️ Tecnologias Utilizadas
[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)](https://nodejs.org/)

<div align="left"> <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js" alt="Node.js" /> <img src="https://img.shields.io/badge/Express-4.x-000000?logo=express" alt="Express" /> <img src="https://img.shields.io/badge/SQLite3-3.x-003B57?logo=sqlite" alt="SQLite3" /> <img src="https://img.shields.io/badge/Knex-2.x-FF6F61?logo=npm" alt="Knex" /> <img src="https://img.shields.io/badge/Bcryptjs-2.x-FF6F61?logo=npm" alt="Bcryptjs" /> </div>
Ferramentas
<div align="left"> <img src="https://img.shields.io/badge/Insomnia-2023-5849BE?logo=insomnia" alt="Insomnia" /> <img src="https://img.shields.io/badge/BeeKeeper%20Studio-3.x-FF7139?logo=beekeeper-studio" alt="BeeKeeper Studio" /> <img src="https://img.shields.io/badge/VSCode-1.x-007ACC?logo=visual-studio-code" alt="VSCode" /> </div> 

## 📂 Estrutura do Projeto
```Copy
Backend-Notes/
├── src/                    # Código-fonte da aplicação
│   ├── configs/            # Configurações (autenticação, upload, etc.)
│   ├── controllers/        # Controladores das rotas
│   ├── database/           # Configurações do banco de dados
│   ├── middlewares/        # Middlewares (autenticação, etc.)
│   ├── providers/          # Provedores de serviços (armazenamento, etc.)
│   ├── routes/             # Definição das rotas da API
│   ├── utils/              # Utilitários (tratamento de erros, etc.)
│   └── server.js           # Ponto de entrada da aplicação
├── assets/                 # Arquivos estáticos (imagens, etc.)
│   └── images/             # Imagens do README
├── tmp/                    # Arquivos temporários (uploads, etc.)
│   └── uploads/            # Imagens de avatar dos usuários
├── .gitignore              # Arquivos ignorados pelo Git
├── knexfile.js             # Configuração do Knex
├── package-lock.json       # Versões exatas das dependências
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```
## 🎲 Como Executar o Projeto

**Pré-requisitos**
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- **Git**

- **Node.js**

- **Insomnia (para testar a API)**

- **BeeKeeper Studio** (para gerenciar o banco de dados SQLite)

- **SQLite3** (banco de dados utilizado)

### Passo a Passo
1. Clone o repositório:

```bash
Copy
git clone https://github.com/IvanM4rtin5/Backend-RocketNotes.git
```
```
cd Backend-Notes
```
2. Instale as dependências:

```bash
Copy
npm install
```
3. Execute as migrações do banco de dados:

```bash
Copy
npx knex migrate:latest
```
4. Inicie o servidor:

```bash
Copy
npm start
```
Acesse a API no Insomnia ou BeeKeeper Studio para testar as funcionalidades.

## 📜 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🙏 Agradecimentos
Agradeço à Rocketseat pelo curso Explorer e por todo o suporte durante o desenvolvimento deste projeto. Também gostaria de agradecer à comunidade de desenvolvedores por compartilhar conhecimento e recursos.

## 📧 Contato
Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me enviar uma mensagem:

**Nome**: [Ivan Martins]

**E-mail**: [ivanmarti.alves@gmail.com]

**LinkedIn**: [https://www.linkedin.com/in/ivan-martins-alves/]

---
Feito por [Ivan Martins]. 🚀
---
