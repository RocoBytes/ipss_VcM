import { createTransport } from '../config/nodeMailer.js'

export async function sendEmailVerification({name, email, token}){
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
        "7fc10035d3cfa4",
        "ff840d553383a9"
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'MEVN',
        to: email,
        subject: 'Yohana Rodriguez Studio - Confirma tu cuenta',
        text: 'Yohana Rodriguez Studio - Confirma tu cuenta',
        html: `<p>Hola: ${name}, confirma tu cuenta en nuestra aplicación web</p>
        <p>Tu cuenta está casi lista, solo debes confirmarla en el siguiente enlace</p>
        <a href="http://localhost:4000/api/auth/verify/${token}">Confirmar Cuenta</a>
        <p>Si tu no creaste esta ccuenta, puedes ignorar este mensaje</p>
        
        `
    })

    console.log('Mensaje enviado', info.messageId)
}