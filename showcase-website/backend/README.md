# Backend

This project is the backend of the showcase-website

It is build with:

- Express.js
- Sequelize.js
- Typescript
- faker.js
- A postgres database

## Getting started

### Install project dependencies

```
yarn
```

### Setup database

:warning: A local postgres service need to be running on localhost

```
yarn db:create
yarn db:migrate
yarn db:seed
```

This will create the migration, migrate the db schema and seed with fake data using faker.js

### Start the project

```
yarn start
```
