<template>
  <div class="relative w-full h-full">
    <!-- Caption Image with Play Button -->
    <div
      v-if="!isPlaying"
      @click="openModal"
      class="relative max-h-[620px] cursor-pointer rounded-xl overflow-hidden"
    >
      <img
        :src="captionImage"
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
    </div>

    <!-- Modal -->
    <div
      v-if="isPlaying"
      class="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-75"
    >
      <div
        class="relative w-full h-full flex justify-center items-center max-w-7xl p-4"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-3xl z-50"
        >
          &times;
        </button>
        <!-- Video Element -->
        <video
          ref="videoPlayer"
          :src="videoSrc"
          class="w-full h-4/5 rounded-xl mt-5 z-40"
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
import videoSrc from "assets/videos/landing_video.mp4";
import playIcons from "assets/icons/playIcon.png";

const isPlaying = ref(false);

// Method to open the modal and play the video
const openModal = () => {
  isPlaying.value = true;
  // Disable background scrolling
  document.body.style.overflow = "hidden";
  nextTick(() => {
    const videoElement = document.querySelector("video");
    videoElement?.play();
  });
};

// Method to close the modal
const closeModal = () => {
  console.log("yes close modal is clicked");

  isPlaying.value = false;
  // Enable background scrolling
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
