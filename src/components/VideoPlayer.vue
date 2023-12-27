<template>
  <div class="video-player" ref="playerContainer"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, defineProps } from "vue";
import Vimeo from "@vimeo/player";

const playerContainer = ref(null);
const props = defineProps(["videoId"]);
let player;

onMounted(() => {
  player = new Vimeo(playerContainer.value, {
    id: props.videoId, // replace with your Vimeo video ID
    autopause: false,
    loop: false
  });
});

onBeforeUnmount(() => {
  if (player) {
    player.destroy();
  }
});
</script>

<style scoped>
/* .video-player {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
} */
</style>
