<script>
import { defineComponent } from "vue";
import { useLocalNotes } from "src/helper";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  name: "IndexPage",
  setup() {
    const notes = useLocalNotes();
    const router = useRouter();
    return { router, notes };
  }
});
</script>

<template>
  <q-page class="flex flex-center">
    <img
      alt="Oliver Green logo"
      src="~assets/ogalpha.png"
      style="width: auto; height: 100px"
    />
  </q-page>
</template>
