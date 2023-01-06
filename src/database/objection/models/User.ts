import "reflect-metadata"
import { Model } from 'objection';
import { singleton } from 'tsyringe';

@singleton()
export class User extends Model {
    static tableName = 'users'
    static idColumn = 'id_users'
}
