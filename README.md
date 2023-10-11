# job-vacancy-control

Job vacancy control é uma aplicação de gestão de vagas de emprego que permite a pessoa usuária, criar, ler, atualizar e apagar conteúdos; Este é um projeto criado em node.js e as informações são armazenadas no banco de dados Mongo.db

   <summary>
   <h2>Configurações das estruturas:</h2>
   </summary>

<!-- ### 🏗️ *Arquitetura MVC - Camadas de controller e Model* -->


   ### Setup:

  <p align="justify">A aplicação, até o momento, é composta de duas camadas: banco de dados e backend.</p>

### 📌 *Rotas - EndPoint*

<br>

 📢 Todas as rotas existentes neste projeto:

- Vagas

| Verbo  |   EndPoint      |        Descrição da Rota                   | Status | Auth |
| ------ | --------------- | -------------------------------------------| ------ |------|
| POST   | /add            | Adicionar uma nova vaga                   |   201  |  ✔️  |
| GET    | /vacancies            | Listar todas as vagasas                     |   200  |  ✔️  |
| GET    | /:id            | Mostrar as vagas pelo ID                  |   200  |  ✔️  |
| DELETE | /delete/vacancy/:id            | Remove uma vaga                           |   200  |  ✔️  |
| PATCH  | /update/:id            | Altera a vaga                             |   200  |  ✔️  |
<br>

- Users

| Verbo  |   EndPoint      |        Descrição da Rota                   | Status | Auth |
| ------ | --------------- | -------------------------------------------| ------ |------|
| POST   | /create            | Adicionar uma nova pessoa usuária                   |   201  |  ❌  |
| GET    | /            | Listar todas as pessoas usuárias                     |   200  |  ❌  |
| GET    | /:id            | Mostrar as pessoas usuárias pelo ID                  |   200  |  ❌  |
| DELETE | /delete/:id            | Remove uma pessoa usuária                           |   200  |  ❌  |
| PATCH  | /:id            | Altera informações de uma pessoa usuária                             |   200  |  ❌  |
| POST   | /login            | Entra com uma pessoa usuária cadastrada                  |   201  |  ❌  |
<br>
  ### Banco de dados:

  <p align="justify">O banco de dados da aplicação é o Mongo.db e conta com duas coleções, uma para armazenar os os dados da vaga, denominada <strong>vacancies</strong> e outra para armazenar as pessoas usuáris <strong>users</strong>. </p>
</details>

### Back-end:

O backend foi construído em node.js. Nele é possível fazer um CRUD completo para manipular as informações no banco de dados.

### Front-end:
<details>
Readme em construção.
</details>
<br>

<summary>
<h2>Rodando o projeto na sua máquina</h2>
</summary>

  1. Escolha um diretório e clone o repositório utilizando **git clone**:
  ```
    git@github.com:Jhamyllie/job-vacancy-control.git
  ```

  2. Acesse o diretório do projeto **job-vacancy-control** e instale as dependências:
  ```
    cd job-vacancy-control
    npm install nodemon
  ```

  3. Crie um arquivo **.env** e configure de acordo com o .env.example:
  ```
    touch .env
  ```

  4. Então rode o script **nodemon server.js**:
  ```
    npm start
  ```



  
