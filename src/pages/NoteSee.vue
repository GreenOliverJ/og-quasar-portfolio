<script>
import { computed, ref } from "vue";
import { useLocalNotes } from "src/helper";
import { useRoute, useRouter } from "vue-router";
import MainContainer from "src/components/MainContainer.vue";

export default {
  components: { MainContainer },
  setup() {
    const notes = useLocalNotes();
    const route = useRoute();
    const noteId = computed(() => parseInt(route.params.id));
    const note = computed(() => notes.value[noteId.value]);

    const router = useRouter();
    const remove = () => {
      notes.value.splice(noteId.value, 1);
      console.log("notes value", notes);
      router.push("/");
    };

    const editing = ref(false);

    return { note, editing, remove };
  }
};
</script>

<template>
  <q-page>
    <MainContainer>
      <div v-if="editing">
        <form @submit="editing = false">
          <q-input v-model="note.title" label="Title" filled></q-input>
          <q-input
            v-model="note.description"
            label="Description"
            filled
          ></q-input>

          <q-card flat bordered class="q-mt-sm">
            <q-editor v-model="note.content" min-height="5rem"></q-editor>
          </q-card>

          <div class="q-mt-md">
            <q-btn class="q-ml-sm" color="positive" type="submit">Done</q-btn>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="row items-center justify-between">
          <h3 class="q-mb-md q-mt-md">{{ note.title }}</h3>
          <div>
            <q-btn
              round
              color="secondary"
              icon="edit"
              @click="editing = true"
            ></q-btn>
            <q-btn
              class="q-ml-sm"
              round
              color="red"
              icon="delete"
              @click="remove"
            ></q-btn>
          </div>
        </div>
        <div>
          {{ note.description }}
        </div>
        <div class="q-mt-md" v-html="note.content"></div>
      </div>
    </MainContainer>
  </q-page>
</template>
