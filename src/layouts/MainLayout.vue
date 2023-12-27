<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-yellow text-black" height-hint="98">
      <q-toolbar>
        <!-- Tabs -->
        <q-tabs align="left">
          <q-route-tab to="/" label="Index" />
          <q-route-tab to="/notes" label="Add notes" />
          <q-route-tab to="/experience" label="Experience" />
          <q-route-tab to="/projects" label="Projects" />
        </q-tabs>
        <!-- Oliver Green logo on the left -->
        <!-- <div style="width: 10px">
          <img
            src="../assets/ogsoftdev.png"
            style="width: 400px; margin-top: 10px"
          />
        </div> -->

        <!-- Spacer to push content to the right -->
        <q-space></q-space>
        <q-space></q-space>

        <!-- Toolbar content -->
        <div class="link-icons">
          <q-toolbar-title>
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
            <a href="https://github.com/GreenOliverJ" target="_blank">
              <q-icon class="q-ml-md" name="fa-brands fa-github" color="black">
              </q-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/oliver-green-frontdesign/"
              target="_blank"
            >
              <q-icon
                class="q-ml-md"
                name="fa-brands fa-linkedin"
                color="black"
              ></q-icon>
            </a>
            <a href="https://www.instagram.com/cocositoverde" target="_blank">
              <q-icon
                class="q-ml-md"
                name="fa-brands fa-instagram"
                color="black"
              ></q-icon>
            </a>
          </q-toolbar-title>
        </div>
      </q-toolbar>
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
<style>
.link-icons {
  display: flex;
  justify-content: flex-end;
}
</style>
``` ```
