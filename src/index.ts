import express, { Application, Router } from 'express'
import { bootServer } from './server'
import { initiateRoutes } from './routes/index'
import { initiateRabbitMqConsumers } from './channels/rabbitmq/consumersInit'

const app: Application = express()

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Initiate Routes
initiateRoutes(app)

// Boot NodeJs Server
bootServer(app)

// RabbitMqConsumersInit
initiateRabbitMqConsumers()


