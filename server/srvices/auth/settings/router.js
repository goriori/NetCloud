import { Router } from 'express'
import userController from '../controllers/user.controller.js'
import { check } from 'express-validator'
const auth = new Router()

auth.post('/signup',
    check('phone').isMobilePhone(),
    check('password').notEmpty(),
    check('email').isEmail().notEmpty(),
    userController.signUp
)
auth.post('/signin',
    check('login', 'The login field cannot be empty').notEmpty(),
    check('password', 'The password field cannot be empty').notEmpty(),
    userController.singIn)


export default auth