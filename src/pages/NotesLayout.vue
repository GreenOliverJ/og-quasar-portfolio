<script>
import { defineComponent } from "vue";
import MainContainer from "src/components/MainContainer.vue";
import NoteCard from "src/components/NoteCard.vue";
import { useLocalNotes } from "src/helper";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    MainContainer,
    NoteCard
  },
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
    <MainContainer>
      <h3>Your notes</h3>
      <div class="row items-center justify-content">
        <q-btn
          color="primary"
          label="Create Note"
          icon="add"
          to="/new"
          @click="router.push('/create')"
        />
      </div>
      <NoteCard
        v-for="({ title, description }, idx) in notes"
        :key="idx"
        :title="title"
        :description="description"
        @click="router.push(`/note/${idx}`)"
      />
      <div v-if="notes.length === 0">You have no notes</div>
    </MainContainer>
    <!-- <img
      alt="Quasar logo"
      src="~assets/ogalpha.png"
      style="width: auto; height: 200px"
    /> -->
  </q-page>
</template>
