import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTableIfNotExists('users', table => {
            table.increments('id_users').primary().unsigned()
            table.integer('role_id').unsigned().notNullable()
            table.foreign('role_id').references('id_roles').inTable('roles').onDelete('CASCADE').onUpdate('CASCADE')
            table.string('name').notNullable()
            table.string('email').notNullable().unique()
            table.boolean('confirmed').notNullable().defaultTo('false')
            table.string('phone').nullable()
            table.string('password').notNullable()
            table.timestamps(true, true)
            // table.uuid('uuid_user').notNullable().defaultTo(knex.raw("(UUID())")) // Only works with mysql vr 8
        })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users')
}

