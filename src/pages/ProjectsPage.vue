<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card v-for="project in projects" :key="project.id" class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ project.title }}</div>
          <!-- Here you can use your video component -->
          <VideoPlayer :videoUrl="project.videoUrl" />
        </q-card-section>

        <q-card-section>
          <div>{{ project.description }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";

const projects = ref([
  {
    id: 1,
    title: "Project 1",
    videoUrl: "https://vimeo.com/824537640",
    description:
      "MEVN Project. Dynamic door creator and pricing editor. Allows user to create door to send price to invoice."
  }
  // ... add more projects here
]);
</script>

<style scoped>
/* Add your styles here */
</style>
