
Aplica��o constru�da com react e node com o objetivo de cadastrar institui��es de banco de alimentos.


### Requisitos

- A PostgreSQL Database ([PostgreSQL](https://www.postgresql.org/) ou [Docker PostgreSQL](https://hub.docker.com/_/postgres))
- Insomnia REST Client ([Insomnia](https://insomnia.rest/download/))
- [Node](https://nodejs.org/en/) instalado (Recommend LTS)
- [Yarn](https://yarnpkg.com/en/docs/install#debian-stable) ou Npm (Just install Node)

### Instala��o

Voc� ir� precisar criar uma base postgree para executar o backend

```bash
### Criando uma imagem do postgreSQL no Docker
docker run --name banco_postgres -e POSTGRES_PASSWORD=sua senha -p 5432:5432 -d postgres

```
### Para instalar as depend�ncias
```bash
$ yarn
```
### Para executar as migrations
```bash
$ yarn typeorm migration:run
```
### Para executar a API
```bash
$ yarn dev:server
```

### Para executar o frontend
```bash
$ yarn start
```
<img src="img/principal.png">


