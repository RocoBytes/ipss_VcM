import { createTransport } from '../config/nodeMailer.js'

export async function sendEmailNewAppointment({date,time}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'MEVN <citas@yohanarodriguez.cl>',
        to: 'admin@yohanarodriguez.cl',
        subject: 'Yohana Rodriguez Studio - Nueva Cita',
        text: 'Yohana Rodriguez Studio - Nueva Cita',
        html: `<p>Hola: Admin, tienes una nueva cita</p>
        <p>La cita será el día: ${date} a las ${time} horas.</p>
        `
    })

    console.log('Mensaje enviado', info.messageId)
}

export async function sendEmailUpdateAppointment({date,time}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'MEVN <citas@yohanarodriguez.cl>',
        to: 'admin@yohanarodriguez.cl',
        subject: 'Yohana Rodriguez Studio - Cita Actualizada',
        text: 'Yohana Rodriguez Studio - Cita Actualizada',
        html: `<p>Hola: Admin, un usuario ha modificado una cita.</p>
        <p>La nueva cita será el día: ${date} a las ${time} horas.</p>
        `
    })

    console.log('Mensaje enviado', info.messageId)
}


export async function sendEmailCancelledAppointment({date,time}){
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    // Enviar el email
    const info = await transporter.sendMail({
        from: 'MEVN <citas@yohanarodriguez.cl>',
        to: 'admin@yohanarodriguez.cl',
        subject: 'Yohana Rodriguez Studio - Cita Cancelada',
        text: 'Yohana Rodriguez Studio - Cita Cancelada',
        html: `<p>Hola: Admin, un usuario ha cancelado una cita.</p>
        <p>La cita estaba programada para el día: ${date} a las ${time} horas.</p>
        `
    })

    console.log('Mensaje enviado', info.messageId)
}