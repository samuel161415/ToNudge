<template>
  <footer
    class="w-full bg-gray-100 flex flex-col justify-center items-center p-4 text-center mt-8 py-10 "
  >
    <div
      class="w-full max-w-7xl flex flex-col md:flex-row  justify-between items-center border-b pb-6 md:pb-10"
    >
      <h1 class="font-bold max-md:mb-5">ToNudge</h1>
      <ul
          class="flex justify-between max-md:w-full items-center text-primary_txt_color"
        >
          <li v-for="tab in tabs">
            <a :href="tab.link" class="mx-2 font-[500]">{{tab.name}}</a>
          </li>
        </ul>
    </div>
    <div
      class="w-full max-w-7xl mt-4  md:mt-8 flex justify-between items-center"
    >
      <p class="text-tertiary_txt_color">&copy; 2024 ToNudge.</p>
      <a href="mailto:contact@tonudge.com" target="_blank" class="flex justify-center items-center">
        <img :src="mail" alt="mail" class="mr-2"/>
        <p class="">Contact: info@tonudge.com</p>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import mail from "assets/icons/mail.png";
import {tabs} from "assets/data"
// No additional scripts needed for this component
</script>

<style scoped>
/* Additional styling if needed */
</style>
