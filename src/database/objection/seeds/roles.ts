import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("roles").del();

    // Inserts seed entries
    await knex("roles").insert([
        { id_roles: 1, name: "SUPER_ADMIN" },
        { id_roles: 2, name: "COMPANY_ADMIN" },
        { id_roles: 3, name: "SUPPLIER_ADMIN" }
    ]);
};
