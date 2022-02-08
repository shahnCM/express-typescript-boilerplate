import knex from 'knex'
import { Model } from 'objection'

const {development} = require('./knexfile')

export async function dbInit() {
    try {
        const dbInit = knex(development)
        Model.knex(dbInit)

        console.log('Database Connection Successful')
    } catch (err) {
        console.error(err)
    }
}
