import { createTransport } from '../config/nodeMailer.js'

export async function sendEmailVerification({name, email, token}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'MEVN <contacto@yohanarodriguez.cl>',
        to: email,
        subject: 'Yohana Rodriguez Studio - Confirma tu cuenta',
        text: 'Yohana Rodriguez Studio - Confirma tu cuenta',
        html: `<p>Hola: ${name}, confirma tu cuenta en nuestra aplicación web</p>
        <p>Tu cuenta está casi lista, solo debes confirmarla en el siguiente enlace</p>
        <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar Cuenta</a>
        <p>Si tu no creaste esta ccuenta, puedes ignorar este mensaje</p>
        
        `
    })

    console.log('Mensaje enviado', info.messageId)
}


export async function sendEmailPasswordReset({name, email, token}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'MEVN <contacto@yohanarodriguez.cl>',
        to: email,
        subject: 'Yohana Rodriguez Studio - Reestablece tu password',
        text: 'Yohana Rodriguez Studio - Reestablece tu password',
        html: `<p>Hola: ${name}, has solicitado reestablecer tu password</p>
        <p>Sigue el siguiente encale para generar un nuevo password:</p>
        <a href="${process.env.FRONTEND_URL}/auth/olvide-password/${token}">Reestablecer Password</a>
        <p>Si tu no creaste esto, puedes ignorar este mensaje</p>

        `
    })

    console.log('Mensaje enviado', info.messageId)
}