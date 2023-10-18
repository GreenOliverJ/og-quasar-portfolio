<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-yellow text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="../assets/ogalpha.png" />
          </q-avatar> -->
          <q-icon
            class="q-ml-md"
            name="fas fa-code"
            color="secondary"
            size=".6em"
          ></q-icon>
          <!-- <q-icon
            class="q-ml-md"
            name="fas fa-computer"
            color="bclack"
          ></q-icon>
          <q-icon
            class="q-ml-md"
            name="fas fa-laptop-code"
            color="black"
          ></q-icon> -->
          <q-icon
            class="q-ml-md"
            name="fa-brands fa-square-js"
            color="black"
          ></q-icon>
          <q-icon
            class="q-ml-md"
            name="fa-brands fa-react"
            color="black"
          ></q-icon>
          <q-icon
            class="q-ml-md"
            name="fa-brands fa-vuejs"
            color="black"
          ></q-icon>
          <q-icon
            class="q-ml-lg"
            name="fas fa-share"
            color="secondary"
            size=".6em"
          ></q-icon>
          <q-icon
            class="q-ml-md"
            name="fa-brands fa-github"
            color="black"
          ></q-icon>
          <q-icon
            class="q-ml-md"
            name="fa-brands fa-linkedin"
            color="black"
          ></q-icon>
          <q-icon
            class="q-ml-md"
            name="fa-brands fa-instagram"
            color="black"
          ></q-icon>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Index" />
        <q-route-tab to="/notes" label="Add notes" />
        <q-route-tab to="/page3" label="My experience" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
