<script setup>
    import { inject } from 'vue'
    import AuthAPI from '../../api/AuthAPI';

    const toast = inject('toast')

    const handleSubmit = async(formData) => {
        try {
            const { data } = await AuthAPI.login(formData)
            console.log(data)
        } catch (error) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
        }
    }
</script>



<template>
    <h1 class="text-6xl font-extrabold text-white text-center mt-10">Iniciar Sesión</h1>
    <p class="text-2xl text-white text-center my-5">Si tienes una cuenta, inicia sesión</p>

    <FormKit
    id="loginForm"
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa las notificaciones"
    @submit="handleSubmit"
    >

        <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Email de Usuario"
            validation="required|email"
            :validation-messages="{
                required: 'El correo es obligatorio',
                email: 'email no valido'
            }"
        />


        <FormKit
            type="password"
            label="Password"
            name="password"
            placeholder="Password de Usuario"
            validation="required"
            :validation-messages="{
                required: 'La contrasena es obligatoria'
            }"
        />

        <FormKit type="submit">Iniciar Sesión</FormKit>


    </FormKit>
</template>
