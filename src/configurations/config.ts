import config from "config"

export const rabbitMqConnString: string = "amqp://rabbit:rabbit@rabbitmq:5672"
export const redisConObj: object = {
    host: 'redis',
    port: 6379,
    password: ''
}
export const mysqlConnection: object = {
    host: config.get("mysql-host"),
    user: config.get("mysql-user"),
    password: config.get("mysql-password"),
    database: config.get("mysql-database")
}