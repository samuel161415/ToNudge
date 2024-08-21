<template>
  <section
    id="benefits"
    class="w-full bg-white py-10 flex items-center justify-center"
  >
    <div
      class="flex flex-col justify-center items-center md:items-start w-full max-w-7xl p-3"
    >
      <p
        class="px-4 py-2 rounded-full text-sm font-semibold bg-[#F7F7F8] text-btn_colors text-center"
      >
        Benefits
      </p>

      <h1
        class="text-primary_txt_color font-sans font-semibold text-4xl md:text-6xl md:leading-[72px] text-center md:text-start w-full md:w-2/3 my-4"
      >
        Never Miss Anything <br />
        in Your Inbox
      </h1>
      <div
        class="w-full grid grid-cols-1 md:grid-cols-7 my-10 gap-y-20 md:gap-x-20"
      >
        <section class="col-span-3 text-tertiary_txt_color">
          <div
            v-for="(card, index) in card_list"
            :key="card.name"
            class="w-full flex items-start p-4"
            :class="
              index === 0
                ? 'border-t border-l border-r border-blue-500 rounded-t-xl bg-gradient-to-b from-background_color/60  to-white '
                : 'py-6'
            "
          >
            <img :src="card.src" :alt="card.name" class="mr-4" />
            <div>
              <h1 class="mb-2 font-semibold text-xl">
                {{ card.title }}
              </h1>
              <p class="my-2">{{ card.desc }}</p>
            </div>
          </div>
        </section>
        <section
          class="py-14 rounded-xl bg-card_list_bg flex flex-col items-start col-span-4 border"
        >
          <div
            class="flex flex-col bg-card_list_bg/50 h-full w-full px-3 md:px-10 relative"
          >
            <div
              class="flex justify-center items-center text-tertiary_txt_color z-10"
            >
              <button class="rounded-lg px-8 p-2 bg-white mr-4 text-blue-500">
                Answered
                <span
                  class="ml-2 bg-blue-500 py-1 px-2 rounded w-5 h-5 text-white"
                  >4</span
                >
              </button>
              <button
                class="rounded-lg px-8 p-2 border border-white bg-card_list_bg"
              >
                Pending
                <span
                  class="ml-2 bg-tertiary_txt_color py-1 px-2 rounded w-5 h-5 text-white"
                  >4</span
                >
              </button>
            </div>
            <ul class="z-10">
              <li
                v-for="(item, index) in list_data"
                :key="item.name"
                @click="selectedIndex = index"
                class="my-2 justify-between items-center p-2 rounded-lg text-xs border bg-white flex transorm-all transition-transform hover:scale-x-110 ease-in-out duration-300 cursor-pointer"
              >
                <div class="my-b mr-2 flex items-center">
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      :value="index"
                      v-model="selectedIndex"
                      class="hidden peer"
                    />
                    <div
                      class="w-6 h-6 border border-blue-500 rounded flex items-center justify-center"
                    >
                      <div
                        class="w-3 h-3 rounded"
                        :class="{
                          'bg-blue-500': selectedIndex === index,
                          'bg-transparent': selectedIndex !== index,
                        }"
                      ></div>
                    </div>
                  </label>
                  <div class="ml-4 text-tertiary_txt_color">
                    <h1 class="font-bold mb-1 text-sm">{{ item.name }}</h1>
                    <p class="md:whitespace-nowrap">
                      Subject: {{ item.subject }}
                    </p>
                  </div>
                </div>
                <div class="my-2 mr-2 flex justify-center items-center">
                  <img :src="check" />
                  <span class="text-green-500 ml-2">{{ item.answered }}</span>
                </div>
                <div class="my-t flex justify-center items-center mr-2">
                  <button
                    class="bg-blue-500 px-2 py-2 mr-2 rounded-lg text-white whitespace-nowrap transform transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    Follow-Ups
                  </button>
                  <button class="p-1 rounded-lg border border-blue-500">
                    <img :src="arrow" />
                  </button>
                </div>
              </li>
            </ul>
            <div class="absolute top-6 z-0 left-0 w-full h-4/5 overflow-hidden">
              <img :src="clbg" class="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cl1 from "assets/icons/cl1.png";
import cl2 from "assets/icons/cl2.png";
import cl3 from "assets/icons/cl3.png";
import check from "assets/icons/check.png";
import arrow from "assets/icons/arrow.png";
import clbg from "assets/images/clbg.png";
import { ref } from "vue";

const card_list = ref([
  {
    name: "cl1",
    title: "Track Important Emails",
    src: cl1,
    desc: "Automatically compile the important sender based on your level of matterness",
  },
  {
    name: "cl2",
    title: "Monitor Follow-Ups",
    src: cl2,
    desc: "Smart curations by our systems to inform you which email should be followed-up",
  },
  {
    name: "cl3",
    title: "Sent Follow-Ups Effortlesly",
    src: cl3,
    desc: "Sent follow-ups quickly by using our dedicated template ready",
  },
]);

const list_data = ref([
  {
    name: "Any Carrol",
    subject: "Meeting Appoinment",
    answered: "Answered 6d a go",
  },
  {
    name: "Artem Sazonov",
    subject: "Meeting Appoinment",
    answered: "Answered 7d a go",
  },
  {
    name: "Victor Pacheco",
    subject: "Meeting Appoinment",
    answered: "Answered Last Week",
  },
  {
    name: "Jaroslav Brabec",
    subject: "Meeting Appoinment",
    answered: "Answered Last Week",
  },
]);
const selectedIndex = ref<number | null>(null);
</script>

<style scoped>
.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: inherit;
  border-radius: inherit;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.3)
  );
}
</style>
