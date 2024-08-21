<template>
  <footer
    class="w-full bg-gray-100 flex flex-col justify-center items-center p-4 text-center mt-8 py-10 p-3"
  >
    <div
      class="w-full max-w-7xl flex justify-between items-center border-b pb-10"
    >
      <h1 class="font-bold">ToNudge</h1>
      <section class="flex text-primary_txt_color">
        <p class="mx-2 font-[500]">How it Works</p>
        <p class="mx-2 font-[500]">Benefits</p>
        <p class="mx-2 font-[500]">Pricing</p>
        <p class="mx-2 font-[500]">FAQ</p>
      </section>
    </div>
    <div
      class="w-full max-w-7xl mx-auto mt-10 flex justify-between items-center"
    >
      <p>&copy; 2024 ToNudge. All rights reserved.</p>
      <a href="#" target="_blank" class="flex justify-center items-center">
        <img :src="mail" alt="mail" class="mr-2"/>
        <p class="font-semibold">Contact: info@tonudge.com</p>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import mail from "assets/icons/mail.png";
// No additional scripts needed for this component
</script>

<style scoped>
/* Additional styling if needed */
</style>
