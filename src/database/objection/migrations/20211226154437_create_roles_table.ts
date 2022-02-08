import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTableIfNotExists('roles', table => {
            table.increments('id_roles').unsigned().primary()
            table.string('name').notNullable()
            table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('roles')
}

