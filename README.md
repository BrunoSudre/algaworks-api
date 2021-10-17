## ALGAWORKS API

Para executar a aplicação é necessário executar os seguintes comandos:

### Passo 1:
Primeiramente, devemos baixar todas as dependências com o

> `npm install `

### Passo 2:
O npm irá instalar a ferramenta ORM [Sequelize](https://www.npmjs.com/package/sequelize) para auxiliar na
criação e gerenciamento de entidades no banco de dados. Com o Sequelize instalado, é necessário alterar o 
arquivo `config/config.json` colocando as informações locais da sua base de dados. Exemplo usando MySQL:

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

### Passo 3:
Após instalado o Sequelize e configurado as informações da base de dados, devemos executar o comando:

>`npx sequelize db:create`

para que ele possa criar a base de dados do ambiente de desenvolvimento em questão. 
Num contexto local, a base criada será de development.

### Passo 4:
Para executar as migrações, que contém a criacão das entidades da aplicação, devemos executar

>`npx sequelize db:migrate`.

### Passo 5:
Para carregar os dados iniciais de demonstração, devemos executar

>`npx sequelize db:seed:all`.
