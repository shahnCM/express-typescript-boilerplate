import knex from 'knex'
import { Model } from 'objection'

import { development } from './knexfile'

export async function dbInit() {
    try {
        const dbInit: any = knex(development)
        
        Model.knex(dbInit)

        console.log('Database Connection Successful')
    } catch (err) {
        console.error(err)
    }
}
