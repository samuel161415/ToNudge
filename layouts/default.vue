<template>
    <div class="min-h-screen  relative">
      <Header />
      
      <main class=" border">
        <slot />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  