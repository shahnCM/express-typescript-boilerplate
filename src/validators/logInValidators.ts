import { Request, Response, NextFunction } from "express";
import { check, body, validationResult } from 'express-validator';

export const companyAdminLogInValidator = [
    check('email', 'Email is required')
        .notEmpty()
        .bail()
        .normalizeEmail()
        .isEmail(),
    check('password', 'Password missing')
        .notEmpty()
        .bail(),

]