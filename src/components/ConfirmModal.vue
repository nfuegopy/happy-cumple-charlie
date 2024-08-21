<template>
    <div class="container mx-auto px-4 py-8 text-center">
        <h2 class="text-3xl font-semibold text-charli-purple mb-6">Confirmar Asistencia</h2>
        <p class="mb-6">Haz clic en el botón para confirmar tu asistencia vía WhatsApp:</p>
        <a :href="whatsappLink" target="_blank"
            class="bg-charli-purple text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
            Confirmar por WhatsApp
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const phoneNumber = '1234567890'; // Reemplaza con el número de WhatsApp correcto
const message = encodeURIComponent('¡Hola! Quiero confirmar mi asistencia al primer añito de Charlie.');
const whatsappLink = ref(`https://wa.me/${phoneNumber}?text=${message}`);
</script>