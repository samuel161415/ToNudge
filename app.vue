
<template>
  <NuxtLayout>
    <Landing />
    <HowItWorks />
    <Benefits />
    <Pricing />
    <FAQ />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
useHead({
  title: 'ToNudge | Boost Your Productivity with Intelligent Email Management',
  meta: [
    { name: 'description', content: 'ToNudge is your go-to tool for optimizing email management. Save time, stay organized, and never miss important emails again.' },
    { property: 'og:title', content: 'ToNudge | Boost Your Productivity with Intelligent Email Management' },
    { property: 'og:description', content: 'Discover how ToNudge can help you manage your emails more effectively, ensuring that important messages are never overlooked.' },
    { property: 'og:type', content: 'website' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
});
</script>
