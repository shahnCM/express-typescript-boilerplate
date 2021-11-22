import express, { Application, Router } from 'express'
import { bootServer } from './server'
import { apiRoutes, webRoutes } from './routes/index';

const app: Application = express()

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Initiate Routes
apiRoutes(app);
webRoutes(app);

// Boot NodeJs Server
bootServer(app)