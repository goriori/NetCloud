import chalk from 'chalk'
import User from "../settings/db/models/User.js";
import generateLogin from './handlers/generateLogin.js';
import sendMail from './handlers/sendMail.js';

class UserController {

    async singIn(req, res) {
        try {
            const { login, password } = req.body
            console.log(req.body)
            const findUser = await User.findOne({ where: { login: login } })
            if (!findUser) {
                return res.status(404).json({
                    message:'Inccorect password or login'
                })
            } else if (findUser.password !== password) {
                return res.status(404).json({
                    message:'Inccorect password or login'
                })
            }
            res.json({ auth: 'OK', message: `Welcom to NetCloud ` })
        } catch (error) {
            res.status(500).json('Errorr')
            console.log(chalk.red('#####################    ERORR  AuthServer   ###############################'))
            console.log(error)
            console.log(chalk.red('#####################    ERORR  AuthServer   ###############################'))
        }

    }

    async signUp(req, res) {
        try {
            const { phone, password, email } = req.body
            const newUser = await User.create({
                phone,
                password,
                email,
                login: generateLogin()
            })
            sendMail(newUser.email, newUser.login)
            res.json({
                registration: 'OK',
            })
        } catch (error) {
            res.status(500).json('Errorr')
            console.log(chalk.red('#####################    ERORR  AuthServer   ###############################'))
            console.log(error)
            console.log(chalk.red('#####################    ERORR  AuthServer   ###############################'))

        }


    }


}


export default new UserController