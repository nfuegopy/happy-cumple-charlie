<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
    <main class="container mx-auto px-4">
      <router-view></router-view>
    </main>
    <footer class="py-4 text-center text-purple-800">
      <p>&copy; {{ new Date().getFullYear() }} Familia de Charlotte</p>
    </footer>
  </div>
</template>

<script setup>
// No necesitamos importar los componentes aquí ahora, ya que se manejarán en las vistas individuales
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;600;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Pacifico', cursive;
}
</style>