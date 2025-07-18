import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import AuthAPI from '../api/AuthAPI'
import AppointmentAPI from '../api/AppointmentAPI'

export const useUserStore = defineStore('user', () => {

    const router = useRouter()
    const user = ref({})
    const userAppointments = ref([])
    const loading = ref(true)

    onMounted(async () => {
        try {
            const { data } = await AuthAPI.auth()
            user.value = data
            if (data && data._id) {
                await getUserAppointments()
            }
        } catch (error) {
            console.log(error)
        }finally{
            loading.value = false
        }
    })

    async function getUserAppointments(){
        if (!user.value || !user.value._id) {
            console.log('Usuario no disponible para obtener citas')
            return
        }
        try {
            const { data } = await AppointmentAPI.getUserAppointments(user.value._id)
            userAppointments.value = data
        } catch (error) {
            console.log('Error al obtener citas del usuario:', error)
        }
    }


    function logout(){
        localStorage.removeItem('AUTH_TOKEN')
        user.value = {}
        router.push({name: 'login'})
    }

    // Para mostrar el nombre en AppointmentLayout, "Hola 'user.value' "
    const getUserName = computed(() => user.value?.name ? user.value?.name : '')

    const noAppointments = computed(() => userAppointments.value.length === 0)


    return{
        user,
        userAppointments,
        getUserAppointments,
        loading,
        logout,
        getUserName,
        noAppointments
    }
})