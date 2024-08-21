<template>
  <div class="relative w-full h-full">
    <!-- Caption Image with Play Button -->
    <div v-if="!isPlaying" @click="playVideo" class="relative max-h-[620px] cursor-pointer rounded-xl overflow-hidden">
    
      <img
        :src="temp_img"
        alt="Video Caption"
        class="w-full h-full object-cover"
      />
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

const isPlaying = ref(false);
// References to video source and assets
// const videoSrc = "/assets/videos/your-video.mp4"; // Path to your video file in the assets folder
 // Path to your play button icon

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
</style>
