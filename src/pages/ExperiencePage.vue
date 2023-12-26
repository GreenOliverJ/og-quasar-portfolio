<template>
  <div class="experience-page">
    <h1>Work Experience</h1>
    <ul>
      <li v-for="experience in experiences" :key="experience.id">
        <h2>{{ experience.company }}</h2>
        <p>{{ experience.position }}</p>
        <p>{{ experience.duration }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: "ABC Company",
          position: "Software Engineer",
          duration: "Jan 2020 - Present"
        },
        {
          id: 2,
          company: "XYZ Corporation",
          position: "Frontend Developer",
          duration: "Mar 2018 - Dec 2019"
        }
      ]
    };
  }
};
</script>

<style scoped>
.experience-page {
  margin: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

p {
  margin-bottom: 5px;
}
</style>
