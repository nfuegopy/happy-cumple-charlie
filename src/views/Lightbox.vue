<template>
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div class="max-w-4xl w-full mx-4">
            <img :src="getImageUrl(images[currentIndex])" :alt="`Imagen ${currentIndex + 1}`"
                class="max-h-[80vh] w-auto mx-auto">
            <div class="flex justify-between mt-4">
                <button @click="prevImage" class="bg-purple-600 text-white px-4 py-2 rounded-full">Anterior</button>
                <button @click="nextImage" class="bg-purple-600 text-white px-4 py-2 rounded-full">Siguiente</button>
            </div>
            <button @click="$emit('close')" class="absolute top-4 right-4 text-white text-2xl">&times;</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    images: {
        type: Array,
        required: true
    },
    initialIndex: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['close']);

const currentIndex = ref(props.initialIndex);

watch(() => props.initialIndex, (newValue) => {
    currentIndex.value = newValue;
});

const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href
}

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};
</script>