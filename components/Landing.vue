<template>
  <section
    id="landing"
    class="min-h-screen flex justify-center w-full relative"
    style="
      background: linear-gradient(
        to bottom,
        rgba(130, 181, 221, 0.2) 0%,
        rgba(130, 181, 221, 0.4) 20%,
        rgba(255, 255, 255, 0.7) 60%,
        rgba(255, 255, 255, 1) 100%
      );
    "
  >
    <div
      class="w-full h-full flex flex-col justify-center items-center pt-[100px] pb-10 max-w-7xl p-3"
    >
      <h2
        class="opacity-0 text-2xl font-[400] text-blue-400 text-center leading-[34px] mt-6 mb-2 animate-slide-in-left"
      >
        Optimize your Outlook
      </h2>
      <h1
        class="opacity-0 text-primary_txt_color font-sans font-semibold text-5xl md:text-6xl  md:leading-[72px] text-center md:w-2/3 animate-slide-in-left"
      >
        Make sure your important emails get answered
      </h1>
      <button
        class="bg-white text-btn_colors py-3 px-4 rounded-lg flex justify-center items-center mt-8 mb-16 shadow-custom-blue animate-glow-slow transform transition-all duration-300 ease-in-out hover:scale-110 "
        v-if="!showContactUs"
      >
        <span class="font-semibold mr-2">Install on</span>
        <img class=" " :src="img1" />
      </button>
      <a
        href="mailto:contact@tonudge.com"
        class="bg-white text-btn_colors py-3 px-4 rounded-lg flex justify-center items-center mt-8 mb-16 shadow-custom-blue animate-glow-slow animate-slide-in-left transform transition-all duration-300 ease-in-out hover:scale-110"
        v-if="showContactUs"
      >
        <span class="font-semibold mr-2">Contact Us</span>
        <img class=" " :src="img1" />
      </a>
      <!-- <img :src="temp_img" class="my-4" /> -->
      <VideoPlayer />

      <div class="flex flex-col w-full my-6 mt-16">
        <span
          class="text-center text-lg font-light text-secondary_txt_color my-4"
          >Trusted by fast-growing Fintech and SaaS companies</span
        >
        <section
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 items-place-center justify-center my-4"
        >
        <div
        class="opacity-0 flex items-center justify-center"
        v-for="(icon, index) in icons"
        :key="icon.name"
        :ref="(el) => (iconRefs[index] = el as HTMLElement)"
        :class="{ 'animate-slide-in-left': inView[index] }"
      >
            <img :src="icon.src" :alt="icon.name" />
          </div>
        </section>
      </div>
    </div>
    <div
      class="absolute z-[-5] top-0 left-0 h-3/5 w-full bg-repeat bg-hero-pattern bg-contain"
    ></div>
  </section>
</template>

<script setup lang="ts">
import img1 from "assets/images/img1.png";
import temp_img from "assets/images/temp.png";
import bg from "assets/images/dots.png";
import icon1 from "assets/icons/primer.png";
import icon2 from "assets/icons/duffel.png";
import icon3 from "assets/icons/ravelin.png";
import icon4 from "assets/icons/ivy.png";
import icon5 from "assets/icons/vocode.png";
import icon6 from "assets/icons/legalFly.png";
import icon7 from "assets/icons/hippocratic.png";
import icon8 from "assets/icons/bridge.png";
import icon9 from "assets/icons/model.png";
import icon10 from "assets/icons/heron.png";
import icon11 from "assets/icons/konfir.png";
import icon12 from "assets/icons/tempus.png";
import icon13 from "assets/icons/volume.png";
import icon14 from "assets/icons/terminal.png";
import icon15 from "assets/icons/ready.png";
import VideoPlayer from "./landingComponents/VideoPlayer.vue";

const showContactUs = ref(true);

const icons = [
  { name: "Icon 1", src: icon1 },
  { name: "Icon 2", src: icon2 },
  { name: "Icon 3", src: icon3 },
  { name: "Icon 4", src: icon4 },
  { name: "Icon 5", src: icon5 },
  { name: "Icon 6", src: icon6 },
  { name: "Icon 7", src: icon7 },
  { name: "Icon 8", src: icon8 },
  { name: "Icon 9", src: icon9 },
  { name: "Icon 10", src: icon10 },
  { name: "Icon 11", src: icon11 },
  { name: "Icon 12", src: icon12 },
  { name: "Icon 13", src: icon13 },
  { name: "Icon 14", src: icon14 },
  { name: "Icon 15", src: icon15 },
];


const iconRefs = ref<(Element | null)[]>([]); // Changed to Element to accommodate Vue's ref types
const inView = ref<boolean[]>([]); // Boolean array to track if each icon is in view

onMounted(() => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the icon is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = iconRefs.value.findIndex((el) => el === entry.target);
      if (entry.isIntersecting && index !== -1) {
        inView.value[index] = true; // Set inView to true when the icon is in viewport
      }
    });
  }, observerOptions);

  iconRefs.value.forEach((icon) => {
    if (icon) observer.observe(icon);
  });
});
</script>

<style scoped></style>
