<template>
  <div class="video-player" ref="playerContainer"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Vimeo from "@vimeo/player";

const playerContainer = ref(null);
let player;

onMounted(() => {
  player = new Vimeo(playerContainer.value, {
    id: "824537640", // replace with your Vimeo video ID
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
.video-player {
  /* Your styling here */
}
</style>
