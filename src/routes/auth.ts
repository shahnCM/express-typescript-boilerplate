import { Application, Router } from 'express'
import { upload } from '../packageSettings/multer/settings';
import * as RegistrationController from '../business/controllers/registrationController'
import * as LogInController from '../business/controllers/logInController'
import { catchValidationErrors } from '../middlewares/validationErrors';
import { companyAdminRegistrationValidator } from '../validators/registrationValidators';
import { companyAdminLogInValidator } from '../validators/logInValidators';
import { passIfLoggedIn, blockIfLoggedIn } from '../middlewares/auth';

const router = Router();

router.post('/register/company', [
    blockIfLoggedIn,
    upload.fields([{
        name: 'company_logo',
        maxCount: 1
    }]), ...companyAdminRegistrationValidator, catchValidationErrors
], RegistrationController.registerCompanyAdmin)

router.post('/login/company-admin', [
    blockIfLoggedIn,
    ...companyAdminLogInValidator, catchValidationErrors
], LogInController.logInCompanyAdmin)

router.post('/login/system-admin', [
    blockIfLoggedIn,
    ...companyAdminLogInValidator, catchValidationErrors
], LogInController.logInSystemAdmin)

//Export All Routes
export function routes(app: Application): any {
    app.use('/api/auth', router)
}


