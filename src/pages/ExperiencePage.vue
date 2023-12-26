<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card
        v-for="experience in experiences"
        :key="experience.id"
        class="q-mb-md"
      >
        <q-card-section>
          <div class="text-h6">{{ experience.position }}</div>
          <div class="text-subtitle2">Company: {{ experience.company }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-caption">
            {{ experience.startDate }} - {{ experience.endDate }}
          </div>
          <ul>
            <li v-for="detail in experience.details" :key="detail">
              {{ detail }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          position: "Software Developer - Full Stack",
          company: "Katode",
          startDate: "Jan 2023",
          endDate: "Present",
          details: [
            "Developing and maintaining erp web application.",
            "I've been preparing the app for new clients and I've been working on new features, testing and fixing bugs for existing clients. I've had full responsability of the new version. Adding new styiling, created various new components, including an excel add-in for editing data in the app. I've also been working on the backend, creating new endpoints, setting up sockets, fixing bugs, API calls to a third party site used to handle client information, webhooks and setting up a test server in Digital Ocean, using Docker and github actions; this enables developers to easily test their code before pushing to production.",
            "Collaborating with cross-functional teams, including designers, developers and product owners in an agile environment",
            "Working with: Vue.js, Quasar Framework, React.js, Node.js, Express.js, MongoDB, Docker, Digital Ocean, Git, Github Actions, Azure, Firebase, excel addins."
          ]
        }
        // ... add more experiences here
      ]
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
