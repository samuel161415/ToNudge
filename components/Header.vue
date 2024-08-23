<template>
  <header class="absolute top-0 left-0 w-full z-30">
    <div class="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <!-- Logo/Title -->
      <div class="text-2xl font-[600]">ToNudge</div>

      <!-- Dropdown Button for Mobile -->
      <div class="lg:hidden">
        <button @click="toggleDropdown" class="focus:outline-none">
          <img :src="dropdownOpen ? closeIcon : menuIcon" alt="menu" />
        </button>
      </div>

      <!-- Navigation Links for Desktop -->
      <nav
        :class="['lg:flex lg:space-x-8', dropdownOpen ? 'block' : 'hidden']"
        class="w-full lg:w-auto"
      >
        <ul
          class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0"
        >
          <li>
            <a href="#how-it-works" class="hover:text-primary">How it Works</a>
          </li>
          <li><a href="#benefits" class="hover:text-primary">Benefits</a></li>
          <!-- <li><a href="#pricing" class="hover:text-primary">Pricing</a></li> -->
          <li><a href="#faq" class="hover:text-primary">FAQ</a></li>
        </ul>
      </nav>

      <!-- Install Button -->
      <button
        class="hidden lg:block bg-white py-2 px-4 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        v-if="!showContactUs"
      >
        Install Now
      </button>

      <!-- Contact Us Button -->
      <a
        href="mailto:contact@tonudge.com"
        class="hidden lg:block bg-white py-2 px-4 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110"
        v-if="showContactUs"
      >
        Contact Us
      </a>
    </div>

    <!-- Mobile Dropdown Modal -->
    <div v-if="dropdownOpen" class="fixed inset-0 bg-black/50 z-30 lg:hidden">
      <!-- Header with Title and Close Button -->
      <div class="h-[60vh] bg-white w-full flex flex-col p-5">
        <div class="flex justify-between items-center mb-4">
          <div class="text-3xl font-[600]">ToNudge</div>
          <button
            @click="toggleDropdown"
            class="hover:cursor-pointer focus:outline-none"
          >
            <img :src="closeIcon" alt="close" />
          </button>
        </div>

        <!-- Navigation Links for Mobile -->
        <ul
          class="flex flex-col space-y-4 justify-center items-center font-[500] text-secondary_txt_color text-xl"
        >
          <li class="py-3">
            <a
              href="#how-it-works"
              class="hover:text-primary"
              @click="toggleDropdown"
              >How it Works</a
            >
          </li>
          <li class="py-3">
            <a
              href="#benefits"
              class="hover:text-primary"
              @click="toggleDropdown"
              >Benefits</a
            >
          </li>
          <!-- <li class="py-3">
          <a href="#pricing" class="hover:text-primary" @click="toggleDropdown"
            >Pricing</a
          >
        </li> -->
          <li class="py-3">
            <a href="#faq" class="hover:text-primary" @click="toggleDropdown"
              >FAQ</a
            >
          </li>
        </ul>
        <button
          class="my-3 w-full text-blue-500 text-lg font-semibold border border-blue-500 bg-white py-3 px-8 rounded-lg"
          v-if="!showContactUs"
        >
          Install Now
        </button>
        <a
          href="mailto:contact@tonudge.com"
          class="my-5 w-full text-blue-500 text-center text-lg font-semibold border border-blue-500 bg-white py-3 px-8 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110"
          v-if="showContactUs"
        >
          Contact Us
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import menuIcon from "assets/icons/menu.png";
import closeIcon from "assets/icons/close.png";
import { ref } from "vue";

const showContactUs = ref(true);
const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
