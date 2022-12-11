
import nodemailer from 'nodemailer'

export default async function(email,login) {
    try {
        const testAccount = await nodemailer.createTestAccount()
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        })
        const sendMail = transporter.sendMail({
            from: 'vladislav.borisov2010@gmail.com', // sender address
            to: "vladislav.borisov228@yandex.ru", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
    } catch (error) {
        console.log(error)
    }
}