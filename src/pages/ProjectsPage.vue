<template>
  <q-page padding>
    <div class="projects-container">
      <q-card v-for="project in projects" :key="project.id" class="q-mb-md">
        <q-card-section>
          <div class="text-h6">{{ project.title }}</div>
          <!-- Here you can use your video component -->
          <div
            class="video-container"
            v-for="video in project.videos"
            :key="video.videoId"
          >
            <div class="text-subtitle1">{{ video.videoTitle }}</div>
            <VideoPlayer
              class="center-video q-mb-md"
              :videoId="video.videoId"
            />
            <VideoDisplay
              class="center-video q-mb-md"
              :videoId="video.videoId"
            />
            <div>{{ video.description }}</div>
          </div>
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
import VideoDisplay from "../components/VideoDisplay.vue";

const videoIds = ref(["824537640", "824537640"]);

const projects = ref([
  {
    id: 1,
    videos: [
      {
        id: 1,
        videoId: "824537640",
        videoTitle: "MEVN Dynamic door creator and pricing editor",
        description:
          "MEVN Project. Dynamic door creator and pricing editor. Allows user to create door to send price to invoice."
      }
    ]
  },
  {
    id: 2,
    videos: [
      {
        id: 1,
        videoId: "824537640",
        videoTitle: "MEVN Dynamic door creator and pricing editor",
        description:
          "MEVN Project. Dynamic door creator and pricing editor. Allows user to create door to send price to invoice."
      }
    ]
  }
  // ... add more projects here
]);
</script>

<style scoped>
.projects-container {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(0, 1fr)); */
  grid-gap: 20px;
}

@media (min-width: 600px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.center-video video {
  width: 100%;
}
</style>
