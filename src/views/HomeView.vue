<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import InvitacionView from './InvitacionView.vue';
import DetalleView from './DetalleView.vue';
import GalleriaFotos from './GalleriaFotos.vue';
import koalaSvg from '@/assets/1545532589.svg';

const isOpen = ref(false);
const koalaPosition = ref(0);

const openGift = () => {
  isOpen.value = true;
  animateGiftOpening();
};

const animateGiftOpening = () => {
  gsap.to('.gift-box', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: 'back.in(1.7)',
    onComplete: () => {
      launchConfetti();
    }
  });
};

const launchConfetti = () => {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);

    gsap.set(confetti, {
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100,
      scale: Math.random() * 0.5 + 0.5,
      backgroundColor: ['#ff69b4', '#9370db', '#00CED1', '#FFA500'][Math.floor(Math.random() * 4)],
    });

    gsap.to(confetti, {
      y: -100,
      rotation: Math.random() * 360,
      duration: Math.random() * 2 + 1,
      ease: 'power1.out',
      onComplete: () => document.body.removeChild(confetti),
    });
  }
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

<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 relative overflow-hidden">
    <div class="koala" :style="{ bottom: koalaPosition + 'px' }">
      <img :src="koalaSvg" alt="Koala" width="100" height="100">
    </div>

    <div v-if="!isOpen" class="gift-container">
      <p class="text-purple-800 text-center mb-4 animate-bounce text-xl font-bold">¡Haz clic para abrir tu invitación!
      </p>
      <div class="gift-box" @click="openGift">
        <img src="@/assets/surprise-box.png" alt="Regalo" class="gift-image cursor-pointer w-64 h-64 object-contain">
      </div>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="invitation-content p-4">
        <main class="container mx-auto px-4 py-8">
          <InvitacionView />
          <DetalleView />
          <GalleriaFotos />
        </main>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.gift-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.gift-box {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gift-box:hover {
  transform: scale(1.05);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
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

.invitation-content {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  pointer-events: none;
}
</style>