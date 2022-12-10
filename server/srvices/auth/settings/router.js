import { Router } from 'express'
import userController from '../controllers/user.controller.js'
import { check } from 'express-validator'
const auth = new Router()

auth.post('/signup',
    check('phone').isMobilePhone().notEmpty(),
    check('password').notEmpty(),
    check('email').isEmail().notEmpty(),
    userController.signUp
)


export default auth