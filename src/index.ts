import express, {Application} from 'express'
import { keepAlive } from './keepAlive'
import {bootServer} from './server'
import {initiateRoutes} from './routes'
import {dbInit} from './database/objection/conn'
import {initiateEventListeners} from './events/listeners'
import {initiateWorkerPull, options} from './multiThreading/workerpullThreads'
import {initiateRabbitMqConsumers} from './channels/rabbitmq'
import {initiateEmailQueueScheduler} from './jobs/queueSchedulers'
import { handleError } from './errors/handleError'

const app: Application = express()

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

console.log("BOOTING UP ...");

(async function () {
    // Connect Database
    await dbInit()
    // Boot NodeJs Server
    await bootServer(app)
    // Initiate Routes
    await initiateRoutes(app)
    // Initiate EventListeners
    await initiateEventListeners()
    // Initiate WorkerPulls
    await initiateWorkerPull(options)
    // Initiate RabbitMq Consumers
    await initiateRabbitMqConsumers()
    // Initiate QueueScheduler
    await initiateEmailQueueScheduler()
})();