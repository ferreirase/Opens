<img alt="CRUD" src="https://miro.medium.com/max/4656/1*mzMIXN2JodV2taEBzmUKLg.png" />

<h3 align="center">
  Backend CRUD Test - Opens 
</h3>

<blockquote align="center">“Dê o seu melhor...”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ferreirase/Opens?color=%2304D361">

  <a href="https://www.linkedin.com/in/anderson-raphael-ferreira">
    <img alt="Made by Ferreira" src="https://img.shields.io/badge/made%20by-Ferreira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ferreirase/desafio-linkapi/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ferreirase/Opens?style=social">
  </a>
</p>

## :rocket: Sobre o projeto

O **Desafio** foi feito como parte do processo seletivo da **[Opens](http://opens.com.br/)** para a vaga de Desenvolvedor Backend. 
Consiste em construir uma API de CRUD de usuários.


### :floppy_disk: A Estrutura

A **API** possui 2 endpoints, sendo eles **/users** e **/sessions** .


- Method: **GET**
- Endpoint: `http://localhost:3333/users`
- Function: Rota para busca dos dados do usuário logado na API.


A resposta dessa requisição é devolvida com a seguinte estrutura:

```
{
  "user": {
    "_id": "5f6cf6d4048091c70b606af6",
    "login": "admin",
    "password": "$2a$08$oZQcxqaoA6zU5BdK.3jTt.K3zwnsZGVKgNpNohT..uZm8eKAuNiUq",
    "email": "admin@gmail.com",
    "name": "ADMIN",
    "createdAt": "2020-09-25T02:29:24.389Z",
    "__v": 0
  }
}
```

- Method: **POST**
- Endpoint: `http://localhost:3333/users`
- Function: Rota para criação de um novo usuário na API. Permitida apenas para usuário Admin.


A resposta dessa requisição é devolvida com a seguinte estrutura:

```
{
  "user": {
    "_id": "5f6cf6d4048091c70b606af6",
    "login": "admin",
    "password": "$2a$08$oZQcxqaoA6zU5BdK.3jTt.K3zwnsZGVKgNpNohT..uZm8eKAuNiUq",
    "email": "admin@gmail.com",
    "name": "ADMIN",
    "createdAt": "2020-09-25T02:29:24.389Z",
    "__v": 0
  }
}
```

- Method: **PATCH**
- Endpoint: `http://localhost:3333/users`
- Function: Rota para atualização dos dados do usuário logado na API.

A resposta dessa requisição será  
```
{
  "user": {
    "_id": "5f6cf6d4048091c70b606af6",
    "login": "lucas",
    "name": "LUCAS SILVA",
    "email": "lucas@gmail.com",
    "password": "321321",
    "createdAt": "2020-09-24T19:53:53.466Z"
  }
}
``` 


- Method: **DELETE**
- Endpoint: `http://localhost:3333/users?id=xxxxxxxxxxxx`
- Function: Rota para remoção de um usuário. Permitida apenas para usuário Admin.

A resposta dessa requisição é devolvida com a seguinte estrutura: 


```
{
  "message": "User deleted!",
  "statusCode": 200
}

```


### :cd: Rodando a aplicação!

**`OBS!!!`**: *``` Para rodar a aplicação na sua máquina, garanta que tenha instalados na mesma o Docker e Docker Compose. ```*


A aplicação rodará na porta **3333** e o banco de dados Mongo na porta **27017**.
Usuário admin: **admin** - senha: **123456**.
 
#### Subindo o servidor backend
  1. Clone/Baixe este repositório na sua máquina;
  2. Abrir o terminal na raiz da pasta e rodar "npm run up" para subir os contâineres do projeto;
  3. Depois rode o comando "npm run seed" para subir a seed de usuário admin da API.
  4. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:3333" e o banco de dados MongoDB na porta 27017.
  
  
  Utilize os endpoints informados acima para fazer as operações. 


## :memo: Tecnologias Utilizadas no Projeto

- *``` NodeJS ```*
- *``` Express ```*
- *``` Eslint ```*
- *``` Prettier ```*
- *``` Axios ```*
- *``` Docker ```*
- *``` MongoDB ```*
- *``` URL Encode ```*
- *``` JWT ```*

---

## :man: Author
[**_```Anderson Raphael Ferreira```_**](https://www.linkedin.com/in/anderson-raphael-ferreira/)
