<script>
import { defineComponent } from "vue";
import { useLocalNotes } from "src/helper";
import { reactive } from "vue";
import MainContainer from "src/components/MainContainer.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { MainContainer },
  name: "PageNew",
  setup() {
    const router = useRouter();
    const notes = useLocalNotes();

    const note = reactive({ title: "", description: "", content: "" });

    const submit = () => {
      notes.value.unshift({
        ...note,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      router.push("/");

      note.title = "";
      note.description = "";
      note.content = "";
    };
    return { note, submit };
  }
});
</script>

<template>
  <q-page>
    <MainContainer>
      <h3>New Note</h3>
      <form @submit="submit">
        <q-input
          class="q-mt-sm"
          outlined
          v-model="note.title"
          label="Title"
        ></q-input>
        <q-input
          class="q-mt-sm"
          outlined
          v-model="note.description"
          label="Description"
        ></q-input>
        <q-card flat bordered class="q-mt-sm">
          <q-editor v-model="note.content" min-height="5rem"
        /></q-card>
        <div>
          <q-btn to="/" type="reset">Cancel</q-btn>
          <q-btn type="submit" label="Create Note" class="q-ml-sm" />
        </div>
      </form>
    </MainContainer>
  </q-page>
</template>
