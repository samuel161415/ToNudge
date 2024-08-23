<template>
  <div class="relative w-full h-full">
    <div
      v-if="!isPlaying"
      @click="openModal"
      class="relative max-h-[620px] cursor-pointer rounded-xl overflow-hidden md:pr-[100px] animate-slide-in-left"
    >
      <img
        :src="preview"
        alt="Video Caption"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center group">
        <!-- Outer Circle -->
        <div
          class="w-36 h-36 border border-blue-500 rounded-full p-5 bg-blue-500/30 animate-pulse-gradient"
        >
          <!-- Inner Circle with Play Button -->
          <div
            class="w-full h-full bg-blue-600 rounded-full flex justify-center items-center group-hover:scale-110 transition-transform duration-300"
          >
            <img :src="playIcons" alt="playIcon" />
          </div>
        </div>
      </div>
      <div
        class="absolute right-0 top-1/2 transform -translate-y-1/2  h-2/3 "
        
      >
        <img :src="sidePreview" alt="sidePreview" class="w-full h-full object-cover"/>
      </div>
    </div>

    <div
      v-if="isPlaying"
      class="fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
      @click.self="closeModal"
    >
      <div
        class="relative w-full border border-gray-500 rounded-xl flex justify-center items-center max-w-7xl p-4"
      >
        <button
          @click="closeModal"
          class="absolute top-[-5px] transform transition-all hover:text-red-500 duration-300 ease-in-out right-2 text-white text-3xl z-50"
        >
          &times;
        </button>

        <video
          ref="videoPlayer"
          :src="videoSrc"
          class="w-full h-4/5 rounded-xl mt-5 z-40 border border-gray-600"
          controls
          autoplay
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import captionImage from "assets/images/caption.png";
import preview from "assets/images/preview.png";
import videoSrc from "assets/videos/landing_video.mp4";
import playIcons from "assets/icons/playIcon.png";
import sidePreview from "assets/images/sidePreview.png";

const isPlaying = ref(false);
const videoPlayer = ref<HTMLVideoElement | null>(null);

const openModal = () => {
  isPlaying.value = true;
  document.body.style.overflow = "hidden";
  nextTick(() => {
    videoPlayer.value?.play();
  });
};

// Method to close the modal
const closeModal = () => {
  isPlaying.value = false;
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
/* Example styles */
@keyframes pulse-gradient {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-pulse-gradient {
  animation: pulse-gradient 2s infinite;
}

/* Overlay styles */
.bg-black.bg-opacity-75 {
  backdrop-filter: blur(5px);
}
</style>
