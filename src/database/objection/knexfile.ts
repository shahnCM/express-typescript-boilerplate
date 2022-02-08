// Update with your config settings.
import { knexSnakeCaseMappers } from 'objection'

const mysqlConnection: object = {
  host: "mysql-5",
  user: "root",
  password: "root",
  database: "auto_part_dev"
}

module.exports = {
  development: {
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
  },
  staging: {
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
  },
  production: {
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
}

