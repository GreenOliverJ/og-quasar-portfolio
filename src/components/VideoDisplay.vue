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
import {
  getStorage,
  ref as storageRef,
  getDownloadURL
} from "firebase/storage";
import { app } from "src/boot/firebaseConfig"; // adjust the path as necessary

export default {
  setup() {
    const videoUrl = ref(null);

    onMounted(async () => {
      debugger;
      try {
        const storage = getStorage(app);
        const storageReference = storageRef(
          storage,
          "gs://og-quasar-portfolio.appspot.com/IMG_4801.MOV"
        );
        const url = await getDownloadURL(storageReference);
        videoUrl.value = url;
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    });

    return { videoUrl };
  }
};
</script>
