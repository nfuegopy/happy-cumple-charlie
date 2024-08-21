<script setup>
import { ref } from 'vue';

const images = ref([
    'gallery/1.jpg',
    'gallery/2.jpg',
    'gallery/3.jpg',
    'gallery/4.jpg',
    'gallery/5.jpg',
    'gallery/6.jpg',
    'gallery/7.jpg',
    'gallery/8.jpg',
    'gallery/9.jpg',
    'gallery/10.jpg',
    'gallery/11.jpg',
]);

const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
};

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
    currentImageIndex.value = index;
    lightboxOpen.value = true;
};

const closeLightbox = () => {
    lightboxOpen.value = false;
};
</script>

<template>
    <section class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 class="text-2xl font-semibold text-purple-600 mb-4">Galería de fotos</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(image, index) in images" :key="index" class="relative group">
                <img :src="getImageUrl(image)" :alt="`Imagen ${index + 1}`" class="w-full h-48 object-cover rounded-lg">
                <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button @click="openLightbox(index)"
                        class="text-white bg-purple-600 px-4 py-2 rounded-full">Ver</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Lightbox básico -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        @click="closeLightbox">
        <img :src="getImageUrl(images[currentImageIndex])" :alt="`Imagen ${currentImageIndex + 1}`"
            class="max-w-full max-h-full object-contain">
    </div>
</template>