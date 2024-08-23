<template>
  <section id="faq" class="flex items-center justify-center bg-white py-10">
    <div class="flex flex-col justify-center items-center w-full max-w-7xl p-3">
      <p
        class="px-4 py-2 rounded-full text-sm font-semibold bg-[#F7F7F8] text-btn_colors text-center"
      >
        FAQ'S
      </p>
      <h1
        class="text-primary_txt_color font-sans font-semibold text-5xl md:text-6xl md:leading-[72px] text-center my-4"
      >
        Frequently Ask Questions
      </h1>

      <div class="md:w-4/5">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="toggleExpand(index)"
          :class="[
            'cursor-pointer border-b  py-4 my-3 w-full',
            expandedIndex === index
              ? 'border-black '
              : 'border-gray-300',
          ]"
        >
          <!-- Title and Icon -->
          <div class="w-full flex justify-between items-center">
            <div class="flex-1 mr-2">
              <h3
                class="text-xl font-[400]"
                :class="
                  expandedIndex === index
                    ? 'text-blue-500'
                    : 'text-primary_txt_color'
                "
              >
                {{ item.title }}
              </h3>
            </div>
            <div>
              <div class="text-xl">
                <img v-if="expandedIndex === index" :src="minus" alt="minus" />
                <img v-else :src="plus" alt="plus" />
              </div>
            </div>
          </div>

          <!-- Expanded Description -->
          <div v-if="expandedIndex === index" class="py-4 w-full">
            <p class="text-tertiary_txt_color">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import plus from "assets/icons/plus.png";
import minus from "assets/icons/minus.png";
import { ref } from "vue";

const expandedIndex = ref<number | null>(null);

const items = ref([
  { title: "Is ToNudge free to use?", description: "Description for item 1" },
  {
    title: "How do I setup ToNudge in My Email?",
    description:
      "A step-by-step onboarding process is provided to guide you through creating and adding the secret key from OpenAI required to run the plugin. It only takes a matter of moments to get fully running.",
  },
  {
    title: "How much time I can save with ToNudge?",
    description: "Description for item 3",
  },
  {
    title: "What languages does ToNudge support?",
    description: "Description for item 4",
  },
]);

const toggleExpand = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>
