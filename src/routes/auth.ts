import { Application, Router, NextFunction, Request, Response } from 'express'
import { upload } from '../packageSettings/multer/settings';
import { catchValidationErrors } from '../middlewares/validationErrors';
import { companyAdminRegistrationValidator } from '../validators/registrationValidators';
import { companyAdminLogInValidator } from '../validators/logInValidators';
import { passIfLoggedIn, blockIfLoggedIn } from '../middlewares/auth';
import { logInCompanyAdmin, logInSystemAdmin } from '../controllers/logInController';
import { registerCompanyAdmin } from '../controllers/registrationController';
import { dispatchAction } from '../utils/actionDispatcher';

const router = Router();

router.post('/register/company', [
    blockIfLoggedIn,
    upload.fields([{name: 'company_logo', maxCount: 1}]), 
    ...companyAdminRegistrationValidator, 
    catchValidationErrors
], dispatchAction(registerCompanyAdmin))

router.post('/login/company-admin', [
    blockIfLoggedIn,
    ...companyAdminLogInValidator, 
    catchValidationErrors
], dispatchAction(logInCompanyAdmin))

router.post('/login/system-admin', [
    blockIfLoggedIn,
    ...companyAdminLogInValidator, 
    catchValidationErrors 
], dispatchAction(logInSystemAdmin))
  

//Export All Routes
export function routes(app: Application): any {
    app.use('/api/auth', router)
}


