## ALGAWORKS API

Para executar a aplicação é necessário executar os seguintes comandos:

### Passo 1:
Primeiramente, devemos baixar todas as dependências com o

> `npm install `

### Passo 2:
O npm irá instalar a ferramenta ORM [Sequelize](https://www.npmjs.com/package/sequelize) para auxiliar na
criação e gerenciamento de entidades no banco de dados. Com o Sequelize instalado, devemos executar o comando:

>`npx sequelize db:create`

para que ele possa criar a base de dados do ambiente de desenvolvimento em questão. 
Num contexto local, a base criada será de development.

## Passo 3:
Para executar as migrações, que contém a criacão das entidades da aplicação, devemos executar

>`npx sequelize db:migrate`.

### Passo 4:
Agora, só devemos alterar o arquivo `config.json` colocando as informacoes locais da sua base de dados. Exemplo:

```json
{
    "development": {
        "username": "root",
        "password": "root",
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```
