import chalk from 'chalk'
import User from "../settings/db/models/User.js";

class UserController {



    async signUp(req, res) {
        try {
            const { phone, password, email } = req.body
            const newUser = await User.create({
                phone,
                password,
                email
            })
            res.json({
                registration:'OK',
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