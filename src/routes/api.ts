import { Application, Router } from 'express'

const router = Router();

// router.post('/register/supplier', RegistrationController.registerSupplier)

//Export All Routes
export function routes(app: Application): any {
    app.use('/api', router)
}

