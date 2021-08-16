const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeemail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rutudeshpande23@gmail.com',
        subject: 'TaskManager App',
        text:  `Welcome to the app, ${name}!! Let me know how you along with the app`
    })
}


const sendcancelationemail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rutudeshpande23@gmail.com',
        subject: 'TaskManager-app',
        text: `Goodbye, ${name}. Ihope to see you back soon!!`
    })
}

module.exports = {
    sendwelcomeemail,
    sendcancelationemail
}