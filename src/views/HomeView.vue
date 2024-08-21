<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 relative overflow-hidden">
    <div class="koala" :style="{ bottom: koalaPosition + 'px' }">
      <img :src="koalaSvg" alt="Koala" width="100" height="100">
    </div>

    <div v-if="!isOpen" class="gift-container">
      <p class="text-purple-800 text-center mb-4 animate-bounce text-xl font-bold">¡Haz clic para abrir tu invitación!
      </p>
      <img src="@/assets/surprise-box.png" alt="Regalo" @click="openGift"
        class="gift-box cursor-pointer w-64 h-64 object-contain">
    </div>

    <transition name="fade">
      <div v-show="isOpen" class="invitation-content p-4">
        <header class="py-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-purple-800">¡El Primer Añito de Charli!</h1>
        </header>

        <main class="container mx-auto px-4 py-8">
          <section class="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
            <h2 class="text-3xl font-semibold text-purple-600 mb-4">¡Estás invitado!</h2>
            <p class="text-xl text-gray-700 mb-4">
              Acompáñanos a celebrar el primer cumpleaños de
              <span class="font-bold text-purple-600">Mia Charlotte</span>
            </p>
            <img src="@/assets/koalita.png" alt="Koalita" class="w-32 mx-auto mb-4">
            <p class="text-lg text-gray-600">
              ¡Únete a nosotros para una tarde llena de diversión, juegos y dulces sorpresas!
            </p>
          </section>

          <section class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 class="text-2xl font-semibold text-purple-600 mb-4">Detalles del evento</h3>
            <ul class="space-y-2 text-gray-700">
              <li><strong>Fecha:</strong> 07 de septiembre de 2024</li>
              <li><strong>Hora:</strong> 17:00 hrs</li>
              <li><strong>Lugar:</strong> En la casa de mis Abuelos Maternos, Calle 4 de Julio 3225</li>
            </ul>
            <div class="mt-6 flex justify-between">
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
        </main>

        <footer class="py-4 text-center text-purple-800">
          <p>&copy; {{ new Date().getFullYear() }} Familia de Charlotte</p>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Lightbox from './Lightbox.vue';
import koalaSvg from '@/assets/1545532589.svg';

const isOpen = ref(false);
const koalaPosition = ref(0);

const phoneNumber = '+595962345078';
const message = encodeURIComponent('¡Hola! Quiero confirmar mi asistencia al primer añito de la koalita.');
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

const mapLink = "https://www.google.com/maps/search/?api=1&query=-25.30009925631959,-57.555997388481465";

const images = ref([
  'gallery/1.jpg',
  'gallery/2.jpg',
  'gallery/3.jpg',
  'gallery/4.jpg',
]);

const openGift = () => {
  isOpen.value = true;
};

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
};
const closeLightbox = () => {
  lightboxOpen.value = false;
};


const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollPosition / maxScroll;
  koalaPosition.value = scrollPercentage * window.innerHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.gift-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.koala {
  position: fixed;
  right: 20px;
  width: 100px;
  height: 100px;
  transition: bottom 0.3s ease;
  z-index: 1000;
  animation: sway 3s ease-in-out infinite;
}

@keyframes sway {

  0%,
  100% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }
}
</style>