<script setup>
    import { formatCurrency } from '@/helpers';
import SelectedService from '../../components/SelectedService.vue';
    import { useAppointmentsStore } from '../../stores/appointments';

    const appointments = useAppointmentsStore()
</script>

<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white mt-10">Detalles Cita y Resumen</h2>
        <p class="text-white text-lg">A continuación verifica la información y confirma tu cita</p>
    
        <h3 class="text-3xl font-extrabold text-white mt-5">Servicios</h3>


        <p v-if="appointments.noServicesSelected" class="text-white text-2xl text-center">No hay servicios seleccionados</p>

        <div v-else class="grid gap-5 mt-5">
            <SelectedService
                v-for="service in appointments.services"
                :key="service._id"
                :service="service"
            />

            <p class="text-right text-white text-2xl">Total a pagar:
                <span class="font-black"> {{ formatCurrency(appointments.totalAmount) }}</span>
            </p>
        </div>
    </div>
</template>