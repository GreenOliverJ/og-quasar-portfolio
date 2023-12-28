<!-- src/components/VideoDisplay.vue -->
<template>
  <div>
    <video v-if="videoUrl" controls>
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-else>Loading video...</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
// Import the initialized Firebase app
import { app } from "src/boot/firebaseConfig";
import "firebase/storage";

// Now you can use the `app` object to access Firebase services
const storage = app.storage();
// import { storage } from "src/boot/firebaseConfig"; // adjust the path as necessary

export default {
  setup() {
    const videoUrl = ref(null);

    onMounted(async () => {
      try {
        const url = await storage
          .refFromURL("gs://og-quasar-portfolio.appspot.com/IMG_4801.MOV")
          .getDownloadURL();
        videoUrl.value = url;
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    });

    return { videoUrl };
  }
};
</script>
