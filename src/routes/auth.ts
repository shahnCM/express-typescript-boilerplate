import { Application, Router, NextFunction, Request, Response } from 'express'
import { upload } from '../packageSettings/multer/settings';
import { catchValidationErrors } from '../middlewares/validationErrors';
import { companyAdminRegistrationValidator } from '../validators/registrationValidators';
import { companyAdminLogInValidator } from '../validators/logInValidators';
import { passIfLoggedIn, blockIfLoggedIn } from '../middlewares/auth';
import { logInCompanyAdmin, logInSystemAdmin } from '../business/controllers/logInController';
import { registerCompanyAdmin } from '../business/controllers/registrationController';

const router = Router();

router.post('/register/company', [
    blockIfLoggedIn,
    upload.fields([{name: 'company_logo', maxCount: 1}]), 
    ...companyAdminRegistrationValidator, 
    catchValidationErrors
], registerCompanyAdmin)

router.post('/login/company-admin', [
    blockIfLoggedIn,
    ...companyAdminLogInValidator, 
    catchValidationErrors
], logInCompanyAdmin)

router.post('/login/system-admin', [
    blockIfLoggedIn,
    ...companyAdminLogInValidator, 
    catchValidationErrors 
], async (req: Request, res: Response, next: NextFunction) => await logInSystemAdmin(req, res).catch(next))
  

//Export All Routes
export function routes(app: Application): any {
    app.use('/api/auth', router)
}


