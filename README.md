# Dolado: Teste prático para Backend

### Tecnologias

- [Nest.js](https://docs.nestjs.com/)
- [Swagger](https://swagger.io/)
- [TypeORM](https://typeorm.io/)
- [nestjs-query](https://doug-martin.github.io/nestjs-query/docs/introduction/getting-started)
- [Azure SQL Server](https://azure.microsoft.com/pt-br/products/azure-sql/?&ef_id=_k_Cj0KCQiA84CvBhCaARIsAMkAvkLMC53iHWM9W7IOZNVOb-4GYPeKpeSR7Pdu927xp8_LBFOpnzkHAn4aAhO8EALw_wcB_k_&OCID=AIDcmmzmnb0182_SEM__k_Cj0KCQiA84CvBhCaARIsAMkAvkLMC53iHWM9W7IOZNVOb-4GYPeKpeSR7Pdu927xp8_LBFOpnzkHAn4aAhO8EALw_wcB_k_&gad_source=1&gclid=Cj0KCQiA84CvBhCaARIsAMkAvkLMC53iHWM9W7IOZNVOb-4GYPeKpeSR7Pdu927xp8_LBFOpnzkHAn4aAhO8EALw_wcB)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/pt-br/docs/home/)
- [DigitalOcean](https://www.digitalocean.com/)

## Perguntas e respostas do teste:

- ## Como foi a experiência no decorrer de todo o processo de desenvolvimento?

  Durante o processo de desenvolvimento, foi desafiador e gratificante trabalhar na construção da API. A integração com a API do OMDB e a implementação das funcionalidades propostas adicionaram um elemento interessante ao projeto. A utilização do framework NestJS facilitou a criação da API, e a configuração do TypeORM para se comunicar com o banco de dados MSSQL foi tranquila. A validação dos dados foram aspectos importantes para garantir a qualidade do código. No geral, foi uma experiência enriquecedora que permitiu aprimorar minhas habilidades em desenvolvimento de APIs REST.

- ## Quais foram as principais decisões tomadas?

  Durante o desenvolvimento do projeto, uma das principais decisões foi em relação à infraestrutura e às tecnologias a serem utilizadas. Após uma análise cuidadosa das opções disponíveis, optei por utilizar o banco de dados MSSQL devido à sua robustez e à minha familiaridade com a plataforma. Para hospedar a aplicação, escolhi a DigitalOcean devido à sua facilidade de uso e à flexibilidade oferecida pelos seus planos de hospedagem. Para garantir a portabilidade e a consistência do ambiente de desenvolvimento, decidi utilizar o Docker para containerizar a aplicação e o Kubernetes para orquestrar e gerenciar os contêineres. 

- ## Como foi organizado o projeto em termos de estrutura de pastas e arquivos?

 Nesse formato:
```js
src: Pasta principal do código-fonte da aplicação.
      docs: Pasta onde a documentação dos endpoints da API pode ser encontrada.
      infra: Pasta onde as configurações e scripts relacionados à infraestrutura são mantidos.
      database: Pasta onde são mantidos os scripts e configurações do banco de dados.
      movie-reviews: Pasta onde o módulo de "movie-reviews" da aplicação é organizado.
      dto: Pasta onde os Data Transfer Objects (DTOs) relacionados aos filmes são mantidos.
      entities: Pasta onde as entidades relacionadas aos filmes são mantidas.
      modules: Pasta onde o controlador e o serviço relacionados aos filmes são mantidos.
      repositories: Pasta onde os repositórios relacionados aos filmes são mantidos (se for o caso).
      app.module.ts: Arquivo de configuração principal do módulo raiz da aplicação.
      main.ts: Arquivo de entrada da aplicação que inicializa o servidor.
```
Essa estrutura mantém a modularidade e organização do projeto, facilitando a manutenção e o desenvolvimento de novos recursos.

## Instruções de como rodar o projeto.

### Instalação

```bash
$ pnpm install
```

### Executando o app

```bash
# development
$ pnpm run start

#or
$ docker-compose build
$ docker-compose up

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### Teste

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
