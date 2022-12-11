import chalk from 'chalk'
import express from 'express'
import sequelize from './settings/db/db.js'
import User from './settings/db/models/User.js'
import auth from './settings/router.js'
import cors from 'cors'



const authApp = express()
authApp.use(cors())
authApp.use(express.json())
authApp.use('/api/users', auth)

const startServer = async () => {
    try {
        sequelize.sync().then(() => {
            console.log(chalk.green('########  Connection  #######'))
            console.log('Contected db Auth service')
            console.log(chalk.green('########  Connection  #######'))

        }).then(() => {
            
           
            
            authApp.listen(process.env.AUTH_PORT, () => {
                console.log(chalk.green('-------------Started---------------'))
                console.log(`server Auth started on port ${process.env.AUTH_PORT}`)
                console.log(chalk.green('-------------Started---------------'))
            })
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()


export default authApp