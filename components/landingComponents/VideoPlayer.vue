<template>
  <div class="relative w-full h-full">
    <!-- Caption Image with Play Button -->
    <div v-if="!isPlaying" @click="playVideo" class="relative max-h-[620px] cursor-pointer rounded-xl overflow-hidden">
    
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
      <!-- <div class="absolute inset-0 flex items-center justify-center">
        <button class="p-4 bg-white rounded-full ">
          <img :src="playButtonIcon" alt="Play Button" class="w-30 h-30" />
        </button>
      </div> -->
    </div>

    <!-- Video Element -->
    <video
      v-else
      ref="videoPlayer"
      :src="videoSrc"
      class="w-full h-full rounded-xl"
      controls
      autoplay
    ></video>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import captionImage from 'assets/images/caption.png';
import playButtonIcon from 'assets/images/play.png';
import videoSrc from 'assets/videos/landing_video.mp4'
import temp_img from "assets/images/temp.png";
import playIcons from 'assets/icons/playIcon.png'

const isPlaying = ref(false);


// Method to play the video
const playVideo = () => {
  isPlaying.value = true;
  // Automatically start playing the video
  nextTick(() => {
    const videoElement = document.querySelector("video");
    videoElement?.play();
  });
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
</style>
