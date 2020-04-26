
API responsável pelo projeto banco de alimentos.


### Requisitos

- A PostgreSQL Database ([PostgreSQL](https://www.postgresql.org/) ou [Docker PostgreSQL](https://hub.docker.com/_/postgres))
- Insomnia REST Client ([Insomnia](https://insomnia.rest/download/))
- [Node](https://nodejs.org/en/) instalado (Recommend LTS)
- [Yarn](https://yarnpkg.com/en/docs/install#debian-stable) ou Npm (Just install Node)

### Instalação

Você irá precisar criar uma base postgree para executar o backend

```bash

### Criando uma imagem do postgreSQL no Docker
docker run --name banco_postgres -e POSTGRES_PASSWORD=sua senha -p 5432:5432 -d postgres

```
# Para instalar as dependências
$ yarn

# Para executar as migrations
$ yarn sequelize db:migrate

# Para executar a API
$ yarn dev

