<script setup>
    import { onMounted } from 'vue'
    import {useRoute} from 'vue-router'
    const route = useRoute()

    const { id } = route.params

    onMounted(async () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    })
</script>



<template> 
        <nav class="my-5 flex gap-3">
            <RouterLink
                :to="{name: 'edit-appointment'}"
                class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white"
                :class="route.name === 'edit-appointment' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'"
            >
                Servicios
            </RouterLink>

            <RouterLink
                :to="{name: 'edit-appointment-details'}"
                class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white"
                :class="route.name === 'edit-appointment-details' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'"
            >
                Cita y Resumen
            </RouterLink>
        </nav>
        <div>
            <RouterView />    
        </div>
</template>