import { Knex } from "knex";
import bcrypt from 'bcryptjs'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash('password', salt)

    // Inserts seed entries
    await knex("users").insert([{
            id_users: 1,
            name: 'System Administrator',
            email: "super@admin.com",
            password: hashedPassword,
            role_id: 1
        }]);
}
