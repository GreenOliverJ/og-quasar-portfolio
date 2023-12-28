<template>
  <div>
    <video class="video-player" v-if="videoUrl" controls muted>
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div v-else>Loading video...</div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL
} from "firebase/storage";
import { app } from "src/boot/firebaseConfig"; // adjust the path as necessary

export default {
  props: {
    videoPath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const videoUrl = ref(null);

    const loadVideo = async () => {
      try {
        const storage = getStorage(app);
        const storageReference = storageRef(storage, props.videoPath);
        const url = await getDownloadURL(storageReference);
        videoUrl.value = url;
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
    watch(() => props.videoPath, loadVideo, { immediate: true });

    return { videoUrl };
  }
};
</script>
<style scoped>
.video-player {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  /* position: relative; */
}
</style>
