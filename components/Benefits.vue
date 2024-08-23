<template>
  <section
    id="benefits"
    class="w-full bg-white py-10 flex items-center justify-center"
  >
    <div class="flex flex-col justify-center items-center w-full max-w-7xl p-3">
      <p
        class="px-4 py-2 rounded-full text-sm font-semibold bg-[#F7F7F8] text-btn_colors text-center"
      >
        Benefits
      </p>

      <h1
        class="text-primary_txt_color font-sans font-semibold text-4xl md:text-6xl md:leading-[72px] text-center w-full md:w-2/3 my-4"
      >
        Never Miss Anything <br />
        in Your Inbox
      </h1>
      <p class="text-center font-[400] text-tertiary_txt_color md:w-2/3">
        Quick action on important emails can lead to faster problem-solving and
        decision-making. Making efficiently handling emails can free up time for
        other tasks.
      </p>
      <div
        class="w-full grid grid-cols-1 md:grid-cols-7 my-10 gap-y-20 md:gap-x-20"
      >
        <section class="col-span-3 text-tertiary_txt_color">
          <div
            v-for="(card, index) in card_list"
            :key="card.name"
            class="w-full flex items-start p-4"
            :class="
              selectedCardIndex === index
                ? 'border-t border-l border-r border-blue-500 rounded-t-xl bg-gradient-to-b from-background_color/60 to-white'
                : 'py-6'
            "
            @click="selectCard(index)"
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
                v-for="(item, index) in filteredListData"
                :key="item.name"
                @click="selectListItem(index)"
                class="my-2 justify-between items-center p-2 rounded-lg text-xs border bg-white flex transform transition-transform hover:scale-x-110 ease-in-out duration-300 cursor-pointer"
              >
                <div class="my-b mr-2 flex items-center">
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      :value="index"
                      v-model="selectedListIndex"
                      class="hidden peer"
                    />
                    <div
                      class="w-6 h-6 border border-blue-500 rounded flex items-center justify-center"
                    >
                      <div
                        class="w-3 h-3 rounded"
                        :class="{
                          'bg-blue-500': selectedListIndex === index,
                          'bg-transparent': selectedListIndex !== index,
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
import { ref, onMounted } from "vue";

const card_list = ref([
  {
    key: "track_emails", // Unique key
    name: "cl1",
    src: cl1,
    title: "Track Important Emails",
    desc: "Automatically compile the important sender based on your level of matterness",
  },
  {
    key: "monitor_followups", // Unique key
    name: "cl2",
    src: cl2,
    title: "Monitor Follow-Ups",
    desc: "Smart curations by our systems to inform you which email should be followed-up",
  },
  {
    key: "send_followups", // Unique key
    name: "cl3",
    src: cl3,
    title: "Send Follow-Ups Effortlessly",
    desc: "Send follow-ups quickly by using our dedicated template ready",
  },
]);

// Define list_data with corresponding keys
const list_data = ref([
  {
    key: "track_emails", // Matching key
    name: "Any Carrol",
    subject: "Meeting Appointment",
    answered: "Answered 6d ago",
  },
  {
    key: "track_emails", // Matching key
    name: "Artem Sazonov",
    subject: "Meeting Appointment",
    answered: "Answered 7d ago",
  },
  {
    key: "monitor_followups", // Matching key
    name: "Victor Pacheco",
    subject: "Follow-Up Reminder",
    answered: "Pending",
  },
  {
    key: "monitor_followups", // Matching key
    name: "Jaroslav Brabec",
    subject: "Client Follow-Up",
    answered: "Pending",
  },
  {
    key: "send_followups", // Matching key
    name: "John Doe",
    subject: "Follow-Up Email Sent",
    answered: "Answered Yesterday",
  },
  {
    key: "send_followups", // Matching key
    name: "Jane Smith",
    subject: "Follow-Up Email Sent",
    answered: "Answered 2d ago",
  },
]);

const selectedCardIndex = ref<number | null>(0); // Default to first card
const selectedListIndex = ref<number | null>(null); // To track selected item in the list

// Explicitly define the type of filteredListData to avoid type errors
const filteredListData = ref<typeof list_data.value>([]);

// Method to select a card and update the displayed content
const selectCard = (index: number) => {
  selectedCardIndex.value = index;
  selectedListIndex.value = null; // Reset list selection when changing card
  filteredListData.value = list_data.value.filter(
    (item) => item.key === card_list.value[index].key
  );
};

// Method to select a list item without affecting the selected card
const selectListItem = (index: number) => {
  selectedListIndex.value = index;
};

// Initialize default selection when the component is mounted
onMounted(() => {
  selectCard(0); // Select the first card by default
});
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
