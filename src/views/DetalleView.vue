<script setup>
const phoneNumber = '+595962345078';
const message = encodeURIComponent('¡Hola! Quiero confirmar mi asistencia al primer añito de la koalita.');
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
const mapLink = "https://www.google.com/maps/search/?api=1&query=-25.30009925631959,-57.555997388481465";
</script>

<template>
    <div class="mb-8">
        <h1 class="text-4xl md:text-6xl font-bold text-purple-800 text-center mb-8">¡El Primer Añito de Charlie!</h1>

        <section class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-semibold text-purple-600 mb-4">✨ Detalles ✨</h3>
            <ul class="space-y-2 text-gray-700">
                <li><strong>Fecha:</strong> 7 de septiembre de 2024</li>
                <li><strong>Hora:</strong> 17:00 hrs</li>
                <li><strong>Lugar:</strong> En el cálido hogar de mis queridos abuelitos maternos, en la ciudad de
                    Asuncion, Calle 4 de Julio 3225</li>
            </ul>
            <div class="mt-6 flex flex-wrap justify-between gap-4">
                <a :href="mapLink" target="_blank"
                    class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 flex items-center">
                    <span class="mr-2">🗺️</span> Ver ubicación
                </a>
                <a :href="whatsappLink" target="_blank"
                    class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 flex items-center">
                    <span class="mr-2">✅</span> Confirmar asistencia
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped>
@media (max-width: 640px) {
    .flex-wrap {
        justify-content: center;
    }
}
</style>