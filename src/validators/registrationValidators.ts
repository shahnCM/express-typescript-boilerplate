import { Request, Response, NextFunction } from "express";
import { check, body, validationResult } from 'express-validator';

export const companyAdminRegistrationValidator = [
    check('email', 'Email is required')
        .notEmpty()
        .bail()
        .normalizeEmail()
        .isEmail(),
    check('phone', 'Phone is Required')
        .notEmpty()
        .bail()
        .isMobilePhone('any', {
            strictMode: true
        })
        .withMessage('Phone number region error'),
    check('password', 'Password missing')
        .notEmpty()
        .bail()
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })
        .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one number and one special character"),
    check('address', 'Address is required')
        .notEmpty()
        .bail()
        .trim()
        .escape(),
    check('company_logo', 'Company logo was required')
        .custom((file) => {
            if (!file) {
                return false
            }
            return true
        }).withMessage('File missing, Company Logo'),
]