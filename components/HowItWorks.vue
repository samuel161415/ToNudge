<template>
  <section
    id="how-it-works"
    class="flex items-center justify-center bg-white py-10"
  >
    <div class="opacity-0 flex flex-col max-w-7xl justify-center items-center p-3"
    ref="htwSection"
    :class="{ 'animate-fade-in-delay': htwInView }">
      <p
        class="px-4 py-2 rounded-full text-sm font-semibold bg-[#F7F7F8] text-btn_colors text-center"
      >
        How It Works
      </p>
      <h1
        class="text-primary_txt_color font-sans font-semibold text-6xl leading-[72px] text-center md:w-2/3 my-4"
      >
        Emails that Increase Your Productivity
      </h1>
      <span class="text-center font-extralight text-secondary_txt_color my-4"
        >One Add-ons for you to saving working time significantly</span
      >
      <section
        class="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 items-place-center justify-center my-10"
      >
        <div
          class="flex flex-col justify-center items-center"
          v-for="card in cards"
          :key="card.name"
        >
          <img :src="card.src" :alt="card.name" class="my-2" />
          <h1 class="text-secondary_txt_color font-semibold text-xl my-2">
            {{ card.title }}
          </h1>
          <p class="text-center my-2 text-tertiary_txt_color">
            {{ card.desc }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import img1 from "assets/images/img1.png";
import icon1 from "assets/icons/im1.png";
import icon2 from "assets/icons/im2.png";
import icon3 from "assets/icons/im3.png";

const cards = [
  {
    name: "card1",
    src: icon1,
    title: "Focus reducing time spent on emails",
    desc: "Make sure you can save many time as you want to monitoring your email in a workday",
  },
  {
    name: "card2",
    src: icon2,
    title: "preventing missed messages",
    desc: "Our system will help you to compile which email that you needed to look up to in the first page",
  },
  {
    name: "card3",
    src: icon3,
    title: "minimizing delays",
    desc: "You’ll get more time to spend on productivity because we help you to minimize the time spend ",
  },
];
const htwSection = ref<HTMLElement | null>(null);
const htwInView = ref(false);

onMounted(() => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the section is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === htwSection.value && entry.isIntersecting) {
        htwInView.value = true; // Set to true when section is in view
        observer.unobserve(entry.target); // Stop observing once in view
      }
    });
  }, observerOptions);

  if (htwSection.value) {
    observer.observe(htwSection.value); // Start observing the section
  }
});
</script>
