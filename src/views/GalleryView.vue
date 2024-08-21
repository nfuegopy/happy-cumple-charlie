<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-semibold text-charli-purple mb-6">Galería de Fotos</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(image, index) in images" :key="index" class="relative group">
                <img :src="image" :alt="`Imagen ${index + 1}`" class="w-full h-48 object-cover rounded-lg">
                <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button @click="openLightbox(index)"
                        class="text-white bg-charli-purple px-4 py-2 rounded-full">Ver</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
    'url_to_image_1',
    'url_to_image_2',
    'url_to_image_3',
    // ... más imágenes
]);

const openLightbox = (index) => {
    // Implementar lógica de lightbox aquí
    console.log('Abrir lightbox para la imagen', index);
};
</script>