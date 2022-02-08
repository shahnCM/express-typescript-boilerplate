import { Model } from 'objection';

export class User extends Model {
    static tableName = 'users'
    static idColumn = 'id_users'
}
