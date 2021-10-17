'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('tb_usuarios', [{
            nome: 'Demo User',
            email: 'demo_user@email.com',
            password: 'demo'
        }], {});

        await queryInterface.bulkInsert('tb_cursos', [
            {
                nome: 'Aprenda a programar orientado a objetos com Java',
                nivel: '0',
                descricao: 'Orientação a Objetos com Java',
                porc_desconto: 20,
                preco_original: 150.00,
                preco_promocional: 120.00,
                url_imagem: 'https://img-c.udemycdn.com/course/240x135/969548_48c9_5.jpg'

            },
            {
                nome: 'Aprenda de uma vez por todas Algoritmos, Lógica de Programação, Constantes, Variáveis, Operadores e muito mais!',
                nivel: '0',
                descricao: 'Algoritmos e Lógica de Programação do básico ao avançado',
                porc_desconto: 10,
                preco_original: 140.00,
                preco_promocional: 126.00,
                url_imagem: 'https://img-c.udemycdn.com/course/240x135/1693748_4c8f.jpg'
            },
            {
                nome: 'Aprenda a criar web services com SpringBoot.',
                nivel: '0',
                descricao: 'API RESTful com SpringBoot',
                porc_desconto: 0,
                preco_original: 140.00,
                preco_promocional: 0,
                url_imagem: 'https://img-c.udemycdn.com/course/240x135/2330858_e73f.jpg'
            },
            {
                nome: 'Desenvolva um projeto de Web API de pontos turísticos com Python + Django + Django Rest Framework e deploy no Heroku',
                nivel: '1',
                descricao: "Criando poderosas API's RESTful com Django Rest Framework",
                porc_desconto: 20,
                preco_original: 150.00,
                preco_promocional: 120.00,
                url_imagem: 'https://img-c.udemycdn.com/course/240x135/1631400_e3d1_2.jpg'
            },
            {
                nome: 'Aprenda a criar uma aplicação completa com Ruby on Rails API-only',
                nivel: '1',
                descricao: 'Desenvolvendo REST / RESTful APIs com Ruby on Rails',
                porc_desconto: 10,
                preco_original: 140.00,
                preco_promocional: 126.00,
                url_imagem: 'https://img-c.udemycdn.com/course/240x135/1082928_b432_3.jpg'
            },
            {
                nome: 'Do Zero ao Expert em Spring Boot e todo o ecossistema Spring. Guia Completo e atualizado.',
                nivel: '1',
                descricao: 'Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais',
                porc_desconto: 0,
                preco_original: 140.00,
                preco_promocional: 0,
                url_imagem: 'https://img-c.udemycdn.com/course/240x135/2777074_6d96_11.jpg'
            },
        ], {});

        await queryInterface.bulkInsert('tb_modulos', [
            {
                carga_horaria: '1h 18m',
                nome: 'História do Java e Conceitos Iniciais de OO',
                curso_id: 1
            },
            {
                carga_horaria: '42m',
                nome: 'Instalando o Java e o Eclipse',
                curso_id: 1
            },
            {
                carga_horaria: '2h 37m',
                nome: 'Pacotes, Herança, Associações e Polimorfismo',
                curso_id: 1
            },
            {
                carga_horaria: '28m',
                nome: 'Constantes, Variáveis e Tipos de Dados',
                curso_id: 2
            },
            {
                carga_horaria: '18m',
                nome: 'Estruturas de Decisão',
                curso_id: 2
            },
            {
                carga_horaria: '18m',
                nome: 'Comandos de repetição',
                curso_id: 2
            },
            {
                carga_horaria: '18m',
                nome: 'Web Services - básico',
                curso_id: 3
            },
            {
                carga_horaria: '42m',
                nome: 'API dos Carros',
                curso_id: 3
            },
            {
                carga_horaria: '37m',
                nome: 'Testes com Spring Boot',
                curso_id: 3
            },
            {
                carga_horaria: '1h 58m',
                nome: 'Desenvolvendo uma API de pontos Turísticos',
                curso_id: 4
            },
            {
                carga_horaria: '42m',
                nome: 'Desenvolvendo recursos avancados na API',
                curso_id: 4
            },
            {
                carga_horaria: '27m',
                nome: 'Habilitando buscas na API',
                curso_id: 4
            },
            {
                carga_horaria: '3h 10m',
                nome: 'Introdução ao Rails API-only',
                curso_id: 5
            },
            {
                carga_horaria: '58m',
                nome: 'Active Model Serializers',
                curso_id: 5
            },
            {
                carga_horaria: '38m',
                nome: 'Ajustes e Paginação',
                curso_id: 5
            },
            {
                carga_horaria: '1h 18m',
                nome: 'Spring Boot Core e Spring Framework',
                curso_id: 6
            },
            {
                carga_horaria: '42m',
                nome: 'Persistência e Acesso a Dados com Spring Data JPA',
                curso_id: 6
            },
            {
                carga_horaria: '37m',
                nome: 'Spring Security e JWT',
                curso_id: 6
            },
        ], {});

        await queryInterface.bulkInsert('tb_conteudos', [
            { descricao: 'JRE vs JDK', modulo_id: 2 },
            { descricao: 'Instalando o JDK no Mac', modulo_id: 2 },
            { descricao: 'Instalando o JDK no Linux', modulo_id: 2 },
            { descricao: 'Instalando o JDK no Windows', modulo_id: 2 },
            { descricao: 'Instalando o JDK no Windows', modulo_id: 2 },
            { descricao: 'Eclipse', modulo_id: 2 },
            { descricao: 'Instalando o Eclipse no Mac', modulo_id: 2 },
            { descricao: 'Instalando o Eclipse no Linux', modulo_id: 2 },
            { descricao: 'Conhecendo o Eclipse', modulo_id: 2 },
            { descricao: 'Desenvolvendo Classes com o Eclipse', modulo_id: 3 },
            { descricao: 'Pacotes', modulo_id: 3 },
            { descricao: 'Arrays', modulo_id: 3 },
            { descricao: 'Associações', modulo_id: 3 },
            { descricao: 'Herança', modulo_id: 3 },
            { descricao: 'Reescrita de Métodos', modulo_id: 3 },
            { descricao: 'Polimorfismo', modulo_id: 3 },
            { descricao: 'Pilares da OO', modulo_id: 3 },
            { descricao: 'Constantes', modulo_id: 4 },
            { descricao: 'Variáveis', modulo_id: 4 },
            { descricao: 'Tipos de Dados', modulo_id: 4 },
            { descricao: 'Declaração de Variáveis', modulo_id: 4 },
            { descricao: 'Operações Lógicas', modulo_id: 5 },
            { descricao: 'Estruturas de Decisão', modulo_id: 5 },
            { descricao: 'Comandos de Decisão', modulo_id: 5 },
            { descricao: 'Enquanto algo, Processar', modulo_id: 6 },
            { descricao: 'Até que algo, Processar', modulo_id: 6 },
            { descricao: 'Enquanto algo, Processar', modulo_id: 6 },
            { descricao: 'Processar, Enquanto algo', modulo_id: 6 },
            { descricao: 'Processar, Até que algo', modulo_id: 6 },
            { descricao: 'Para', modulo_id: 6 },
            { descricao: 'Criando o IndexController', modulo_id: 7 },
            { descricao: '@RequestMapping', modulo_id: 7 },
            { descricao: 'GET - POST - DELETE - PUT', modulo_id: 7 },
            { descricao: 'GET - @RequestParam', modulo_id: 7 },
            { descricao: '@PathVariable', modulo_id: 7 },
            { descricao: 'POST - @RequestParam', modulo_id: 7 },
            { descricao: 'Criando as tabelas no MySQL', modulo_id: 8 },
            { descricao: '@Service - Injeção de dependências com Spring', modulo_id: 8 },
            { descricao: 'Criando o IndexController', modulo_id: 8 },
            { descricao: 'Ajuste Timezone MySQL', modulo_id: 8 },
            { descricao: 'JPA - Lista de Carros do banco de dados', modulo_id: 8 },
            { descricao: '@Id @GeneratedValue {Auto vs Identity}', modulo_id: 8 },
            { descricao: 'Get Carro By Id', modulo_id: 8 },
            { descricao: 'Get Carro By Tipo', modulo_id: 8 },
            { descricao: 'POST - Salvar Carro', modulo_id: 8 },
            { descricao: 'PUT - Atualizar o Carro', modulo_id: 8 },
            { descricao: 'DELETE - Excluir um Carro', modulo_id: 8 },
            { descricao: 'Testes com Spring Boot', modulo_id: 9 },
            { descricao: 'Teste para Inserir um Carro', modulo_id: 9 },
            { descricao: 'Teste para inserir e Deletar um Carro', modulo_id: 9 },
            { descricao: 'A necessidade de termos um banco de dados para testes', modulo_id: 9 },
            { descricao: 'H2 - banco de dados em memória para testes', modulo_id: 9 },
            { descricao: 'Preenchendo o H2 com uma massa de testes', modulo_id: 9 },
            { descricao: 'Testes HTTP na API', modulo_id: 9 },
            { descricao: 'Criando e modelando a app pontos turísticos', modulo_id: 10 },
            { descricao: 'Criando e modelando a app Atrações', modulo_id: 10 },
            { descricao: 'Criando e modelando a app de comentários e avaliações', modulo_id: 10 },
            { descricao: 'Criando e modelando a app de Localização', modulo_id: 10 },
            { descricao: 'Primeiros passos da API', modulo_id: 10 },
            { descricao: 'Entendendo o CRUD do ModelViewSet', modulo_id: 10 },
            { descricao: 'Consumindo a API com Postman', modulo_id: 10 },
            { descricao: 'Criando o Endpoint de Atrações', modulo_id: 10 },
            { descricao: 'Criando o Endpoint de Endereços', modulo_id: 10 },
            { descricao: 'Criando o Endpoint de Comentários', modulo_id: 10 },
            { descricao: 'Criando o Endpoint de Avaliações', modulo_id: 10 },
            { descricao: 'Implementando get_queryset em Pontos Turísticos', modulo_id: 11 },
            { descricao: 'Sobrescrevendo a action de GET', modulo_id: 11 },
            { descricao: 'Sobrescrevendo a action de POST', modulo_id: 11 },
            { descricao: 'Sobrescrevendo a action de DELETE', modulo_id: 11 },
            { descricao: 'Sobrescrevendo a action de update, partial_update e retrieve', modulo_id: 11 },
            { descricao: 'Implementando suas próprias actions personalizadas', modulo_id: 11 },
            { descricao: 'Utilizando DjangoFilter backend', modulo_id: 12 },
            { descricao: 'Utilizando o SearchFilter', modulo_id: 12 },
            { descricao: 'Alterando o lookup_field padrão do endpoint', modulo_id: 12 },
            { descricao: 'Analisando as Requisições HTTP', modulo_id: 13 },
            { descricao: 'Analisando as Respostas HTTP', modulo_id: 13 },
            { descricao: 'Conhecendo os Verbos HTTP', modulo_id: 13 },
            { descricao: 'Render JSON & Fix Auto-Reloading', modulo_id: 13 },
            { descricao: 'Active Model Serializers', modulo_id: 14 },
            { descricao: 'i18n + json_api Adapter', modulo_id: 14 },
            { descricao: 'Visualizando Campos Associados', modulo_id: 14 },
            { descricao: 'Desmistificando o Accept x Content-Type', modulo_id: 15 },
            { descricao: 'Paginação via HEADERS', modulo_id: 15 },
            { descricao: 'Paginação via JSON API', modulo_id: 15 },
            { descricao: 'Starters: Como funciona a mágica por trás do Spring Boot', modulo_id: 16 },
            { descricao: 'Configurations e Beans', modulo_id: 16 },
            { descricao: 'O Container IOC do Spring Framework', modulo_id: 16 },
            { descricao: 'Injeção de Dependências', modulo_id: 16 },
            { descricao: 'Configuração externalizada: Application Properties', modulo_id: 16 },
            { descricao: 'Trabalhando com multiplos ambientes e profiles', modulo_id: 16 },
            { descricao: 'Criando as classes de modelo', modulo_id: 17 },
            { descricao: 'Salvando e recuperando clientes', modulo_id: 17 },
            { descricao: 'Mapeando a Entidade Cliente para JPA', modulo_id: 17 },
            { descricao: 'Refatorando as outras operacoes para o JPA', modulo_id: 17 },
            { descricao: 'Query Methods', modulo_id: 17 },
            { descricao: 'Trabalhando com @Query', modulo_id: 17 },
            { descricao: 'Configurando autenticação em memória', modulo_id: 18 },
            { descricao: 'Configurando a autorização de urls', modulo_id: 18 },
            { descricao: 'Configurando as Roles e Authorities', modulo_id: 18 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tb_usuarios', null, {});
    }
};
