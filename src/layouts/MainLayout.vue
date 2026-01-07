<!-- <template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-tabs align="left">
          <q-route-tab to="/" label="Index" />
        </q-tabs>
        <q-space></q-space>
        <q-space></q-space>

        <div class="link-icons">
          <q-toolbar-title>
            <q-icon class="q-ml-md" name="fas fa-code" color="secondary" size=".6em"></q-icon>
            <q-icon class="q-ml-md" name="fa-brands fa-square-js" color="black"></q-icon>
            <q-icon class="q-ml-md" name="fa-brands fa-react" color="black"></q-icon>
            <q-icon class="q-ml-md" name="fa-brands fa-vuejs" color="black"></q-icon>
            <q-icon class="q-ml-lg" name="fas fa-share" color="secondary" size=".6em"></q-icon>
            <a href="https://github.com/GreenOliverJ" target="_blank">
              <q-icon class="q-ml-md" name="fa-brands fa-github" color="black">
              </q-icon>
            </a>
            <a href="https://www.linkedin.com/in/oliver-green-12b03784/" target="_blank">
              <q-icon class="q-ml-md" name="fa-brands fa-linkedin" color="black"></q-icon>
            </a>
            <a href="https://www.instagram.com/cocositoverde" target="_blank">
              <q-icon class="q-ml-md" name="fa-brands fa-instagram" color="black"></q-icon>
            </a>
          </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template> -->
<template>
  <q-layout view="hHh lpR fFf">
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
