// Update with your config settings.
import { knexSnakeCaseMappers } from 'objection'

const mysqlConnection: object = {
  host: "mysql-5",
  user: "root",
  password: "root",
  database: "test_projects"
}

export const development: object = {
  client: 'mysql2',
  connection: mysqlConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  seed: {
    directory: './seeds'
  },
  ...knexSnakeCaseMappers,
}

export const staging: object = {
  client: 'postgresql',
  connection: mysqlConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  ...knexSnakeCaseMappers,
}

export const production: object = {
  client: 'postgresql',
  connection: mysqlConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  ...knexSnakeCaseMappers,
}


