<template>
  <q-page padding>
    <div class="projects-container">
      <q-dialog v-model="wrongPasswordDialog" persistent>
        <q-card style="width: 200px">
          <q-bar class="bg-red-4" style="border-bottom: 1px solid #cccccc">
            <q-icon name="mdi-file-pdf" />
            <div>{{ currentTitle }}</div>
            <q-space />
            <q-btn
              dense
              flat
              icon="fas fa-close"
              @click="wrongPasswordDialog = false"
            >
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <div class="text-h6">Wrong Password</div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="dialog">
        <q-card style="width: 700px">
          <q-form @submit="checkPassword">
            <div class="text-2em q-ma-md">
              Due to the projects containing sensitive data, I kindly request
              you ask for a password.
            </div>
            <q-input
              class="q-ma-md"
              v-model="password"
              type="password"
              label="Enter password to view videos"
              style="width: 100%; max-width: 520px"
            ></q-input>
            <q-card-actions align="right">
              <q-btn class="q-ma-sm bg-green-4" dense type="submit"
                >Submit</q-btn
              >
              <q-btn class="bg-yellow-4" dense @click="openEmailDialog"
                >Request a password</q-btn
              >
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>

      <q-dialog v-model="emailDialog" persistent>
        <q-card style="width: 700vw">
          <q-bar class="bg-yellow-4" style="border-bottom: 1px solid #cccccc">
            Send your password request
            <q-icon name="mdi-file-pdf" />
            <div>{{ currentTitle }}</div>
            <q-space />
            <q-btn dense flat icon="fas fa-close" @click="emailDialog = false">
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <q-input v-model="userName" label="Enter your name"></q-input>
            <q-input v-model="userName" label="Enter your company"></q-input>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              class="q-ma-sm bg-green-4"
              dense
              label="Send request"
              @click="sendRequest"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

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
            <VideoDisplay
              v-if="authorized"
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
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
// import VideoPlayer from "../components/VideoPlayer.vue";
import VideoDisplay from "../components/VideoDisplay.vue";

const $q = useQuasar();

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

const authorized = ref(false);
const password = ref("");
let dialog = ref(false);
const wrongPasswordDialog = ref(false);
const emailDialog = ref(false);
const userName = ref("");
const companyName = ref("");

onMounted(() => {
  if (!authorized.value) {
    dialog.value = true;
    // $q.dialog({
    //   title: "Enter Password to View Videos",
    //   message: "Enter Password to View Videos",
    //   prompt: {
    //     model: password,
    //     type: "password"
    //   },
    //   cancel: true,
    //   persistent: true
    // }).onOk(() => {
    //   checkPassword();
    // });
  }
});

const openEmailDialog = () => {
  emailDialog.value = true;
};

const sendRequest = () => {
  const mailtoLink = `mailto:greenoliverj@gmail.com?subject=Password Request&body=I'm requesting a password to access your project videos. Thank you. Kind regards, ${userName.value} from ${companyName.value}`;
  window.location.href = mailtoLink;
  closeEmailDialog();
};

const checkPassword = () => {
  if (password.value === "letmesee") {
    authorized.value = true;
    dialog.value = false;
  } else {
    wrongPasswordDialog.value = true;
    // $q.notify({
    //   message: "Wrong password",
    //   color: "negative",
    //   icon: "report_problem"
    // });
  }
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
