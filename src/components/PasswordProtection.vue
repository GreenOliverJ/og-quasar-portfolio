<template>
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Enter Password to View Video</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="password" type="password" label="Password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="OK" color="primary" @click="checkPassword" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineEmits, watch, defineProps, on } from "vue";

const dialog = ref(false);
const password = ref("");
const { emit } = defineEmits(["password-verified"]);
const props = defineProps(["open-password-dialog"]);

const checkPassword = () => {
  if (password.value === "letmeseethisvideo") {
    // Replace 'yourPassword' with the actual password
    dialog.value = false;
    // TODO: Show the video
  } else {
    // Handle wrong password
  }
};

const openDialog = () => {
  dialog.value = true;
};

watch(
  () => props["open-password-dialog"],
  (newVal) => {
    openDialog();
    if (!newVal) {
      // Reset password when the dialog is closed
      password.value = "";
    }
  }
);
</script>
