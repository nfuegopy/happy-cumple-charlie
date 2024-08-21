<script setup>

import koalitaImg from '@/assets/koalita.png';
</script>

<template>
    <section class="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
        <h2 class="text-3xl font-semibold text-purple-600 mb-4">¡Estás invitado!</h2>
        <p class="text-xl text-gray-700 mb-4">
            Acompáñanos a celebrar el primer cumpleaños de
            <span class="font-bold text-purple-600">Mia Charlotte</span>
        </p>
        <img :src="koalitaImg" alt="Koalita" class="w-32 mx-auto mb-4">
        <p class="text-lg text-gray-600">
            ¡Únete a nosotros para una tarde llena de diversión, juegos y dulces sorpresas!
        </p>
    </section>
</template>