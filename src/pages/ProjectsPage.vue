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
            <q-btn label="View Video" @click="promptPassword(video)"></q-btn>
            <!-- PasswordProtection component is shown only when passwordPromptNeeded is true -->
            <PasswordProtection @password-verified="onPasswordVerified" />
            <!-- VideoDisplay should be shown only if the password is correct -->
            <!-- <VideoPlayer
              class="center-video q-mb-md"
              :videoId="video.videoId"
            /> -->
            <VideoDisplay
              v-if="authorizedVideos.includes(video.id)"
              class="center-video q-mb-md"
              :videoPath="video.videoUrl"
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
  <!-- <PasswordProtection /> -->
</template>

<script setup>
import { ref, defineEmits } from "vue";
// import VideoPlayer from "../components/VideoPlayer.vue";
import VideoDisplay from "../components/VideoDisplay.vue";
import PasswordProtection from "../components/PasswordProtection.vue";

const videoIds = ref(["824537640", "824537640"]);

const projects = ref([
  {
    id: 1,
    videos: [
      {
        id: 1,
        videoUrl: "gs://og-quasar-portfolio.appspot.com/KatodeDynamicDoor.mov",
        videoTitle: "MEVN Dynamic door creator and pricing editor.",
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
        videoUrl: "gs://og-quasar-portfolio.appspot.com/KatodeStyling.mov",
        videoTitle: "Styling, locale, profile, theme, and layout.",
        description:
          "New styling for the site, locale buttons and translation, user profile pic, dark and light theme, and layout items."
      }
    ]
  },
  {
    id: 3,
    videos: [
      {
        id: 1,
        videoUrl: "gs://og-quasar-portfolio.appspot.com/KatodeDragAndDrop.mov",
        videoTitle:
          "Drag and drop between cells and bulk delete functionality.",
        description:
          "Implemented drag and drop functionality between cells and bulk delete functionality. Fixes data, depending on date and employee, also sets new group info is the cells are in a group project."
      }
    ]
  },
  {
    id: 4,
    videos: [
      {
        id: 1,
        videoUrl: "gs://og-quasar-portfolio.appspot.com/KatodeTaskList.mov",
        videoTitle:
          "Task list for push off projects and other tasks for projects and employees.",
        description:
          "A task list for pushing off tasks from project cells and creating other tasks for projects, and employees. The tasks are shown in the project's dialog, informs employee in dashboard if there are pending tasks and allows user to filter by employee ans task type."
      }
    ]
  }
]);
const authorizedVideos = ref([]);
const passwordPromptNeeded = ref(false);
const videoBeingPrompted = ref(null);

const promptPassword = (video) => {
  debugger;
  passwordPromptNeeded.value = true;
  videoBeingPrompted.value = video.id;
};

const onPasswordVerified = () => {
  debugger;
  authorizedVideos.value.push(videoBeingPrompted.value);
  passwordPromptNeeded.value = false;
};
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
