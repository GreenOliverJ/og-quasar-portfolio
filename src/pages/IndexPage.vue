<template>
  <q-page class="bg-dark text-white">
    <q-page-sticky position="bottom-right" :offset="[18, 18]" z-index="999" v-show="showFab">
      <q-btn fab icon="fas fa-file-download" color="primary" class="cv-fab" @click="downloadCV">
        <q-tooltip anchor="center left" self="center right" class="bg-accent">
          Download my CV
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
    <!-- Hero Section -->
    <div class="hero-section mouse-glow flex flex-center column q-pa-md" ref="heroRef" @mousemove="updateMousePosition">
      <canvas ref="particleCanvas" class="particle-canvas"></canvas>
      <div class="hero-section flex flex-center column q-pa-md">
        <div class="row items-center justify-center q-gutter-xl">
          <div class="col-12 col-md-5 text-center text-md-left">
            <div class="text-h6 text-primary q-mb-sm">HELLO THERE, I'M</div>
            <h1 class="text-h2 text-weight-bold q-my-none">Oliver Green</h1>
            <div class="text-h4 q-mt-md text-grey-4 typing-effect">
              {{ currentRole }}
              <span class="cursor">|</span>
            </div>
            <p class="q-pa-md text-body1 q-mt-lg text-grey-5" style="max-width: 500px">
              I craft high-performance web applications with modern technologies.
              Currently building the future at<a href="https://www.katode.no/" target="_blank"
                class="text-accent text-weight-bold" style="text-decoration: none;">
                Katode AS
              </a>.
            </p>
            <div class="q-mt-xl q-gutter-md">
              <q-btn href="https://github.com/GreenOliverJ" target="_blank" outline color="white"
                icon="fa-brands fa-github" label="GitHub" class="q-px-lg q-py-xs" rounded no-caps />
              <q-btn href="https://linkedin.com/in/oliver-green-12b03784" target="_blank" outline color="white"
                icon="fa-brands fa-linkedin" label="LinkedIn" class="q-px-lg q-py-xs" rounded no-caps />
              <q-btn href="https://www.instagram.com/cocositoverde" target="_blank" outline color="white"
                icon="fa-brands fa-instagram" label="Instagram" class="q-px-lg q-py-xs" rounded no-caps />
              <q-btn href="https://www.imcocogreen.com" target="_blank" outline color="white" icon="fas fa-music"
                label="See my artistic work" class="q-px-lg q-py-xs" rounded no-caps />
            </div>
          </div>
          <div class="col-12 col-md-5 flex flex-center">
            <div class="avatar-container">
              <img alt="Oliver Green" src="~assets/OG-portrait.jpg" class="hero-avatar " />
              <img src="~assets/signature.svg" class="hero-signature" alt="Oliver Green Signature" />
            </div>
          </div>
        </div>

        <div class="scroll-down-indicator absolute-bottom text-center q-pb-lg">
          <q-icon name="keyboard_arrow_down" size="3rem" class="bounce" />
        </div>
      </div>
    </div>

    <ChoiceCards />

    <!-- About Me Section -->
    <div class="section-container bg-dark-page q-pa-xl">
      <div class="text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold">About Me</h2>
        <div class="separator bg-primary q-mx-auto"></div>
      </div>
      <div class="row justify-center">
        <div class="col-12 col-md-8 text-body1 text-center text-grey-4">
          <p>
            I am a passionate **Full Stack Developer and Artist**. I believe that code is a medium for
            creative expression, much like a canvas. My artistic background allows me to approach technical
            challenges with a unique perspective—focusing on visual harmony, intuitive design, and
            innovative problem-solving.
          </p>
          <p class="q-mt-md">
            Whether I am architecting a robust backend or refining a user interface, I bring a
            **creative edge** that ensures the final product is not only functional but also
            engaging and aesthetically polished.
          </p>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="section-container q-pa-xl">
      <div class="text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold">My Skills</h2>
        <div class="separator bg-primary q-mx-auto"></div>
      </div>
      <div class="row justify-center q-gutter-md">
        <q-chip size="lg" color="dark-page" text-color="white" icon="fab fa-js">JavaScript</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="code">TypeScript</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="fab fa-vuejs">Vue.js</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="code">Quasar</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="fab fa-react">React</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="fab fa-node-js">Node.js</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="storage">SQL & NoSQL</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="fab fa-git">Git</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="palette">UI/UX Design</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="brush">Self-taught Digital Art</q-chip>
        <q-chip size="lg" color="dark-page" text-color="white" icon="lightbulb">Creative Direction</q-chip>
      </div>
    </div>

    <!-- Work Experience Section -->
    <div class="section-container bg-dark-page q-pa-xl">
      <div class="text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold">Professional Experience</h2>
        <div class="separator bg-primary q-mx-auto"></div>
      </div>
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <q-timeline color="primary" class="q-px-md">
            <!-- Katode AS -->
            <q-timeline-entry icon="work" side="right">
              <template v-slot:title>
                <div class="text-h6 text-weight-bold">Full-Stack Developer (DevOps)</div>
                <div class="text-subtitle1 text-primary">Katode AS | 2023 - Present</div>
              </template>
              <div class="text-grey-4 q-mt-sm">
                <strong>Full time ERP Application Developer</strong>
                <p class="q-mt-xs">
                  Working on the development and maintenance of an ERP system using JavaScript, TypeScript, Node.js, Vue
                  2/3, Quasar,
                  React, DevExtreme, PostgreSQL, and MongoDB.
                </p>
                <ul>
                  <li>Designed and implemented new features and system enhancements.</li>
                  <li>Performed bug fixing, performance tuning, and code optimization.</li>
                  <li>Managed cloud infrastructure on DigitalOcean (Docker).</li>
                  <li>Led the migration from Vue 2 (Options API) to Vue 3 (Composition API).</li>
                  <li>Built backend services with Node.js and Nest.js, supporting real-time updates via Socket.io.</li>
                  <li>Provided direct client communication and daily technical support.</li>
                </ul>
              </div>
            </q-timeline-entry>

            <!-- Splendom Suites -->
            <q-timeline-entry icon="business" side="left">
              <template v-slot:title>
                <div class="text-h6 text-weight-bold">Head of Reception</div>
                <div class="text-subtitle1 text-primary">Splendom Suites Madrid | 2012 - 2018</div>
              </template>
              <div class="text-grey-4 q-mt-sm">
                <strong>Front Office & Operations – 4-Star Boutique Apartments</strong>
                <ul class="q-mt-xs">
                  <li>Managed day-to-day operations of the property.</li>
                  <li>Handled reception, reservations, scheduling, administration, and 24/7 emergency calls.</li>
                  <li>Participated in the opening of two properties.</li>
                  <li>Worked with Sihot and Hotel Manager systems.</li>
                </ul>
              </div>
            </q-timeline-entry>

            <!-- Other Experience -->
            <q-timeline-entry icon="waves" side="right">
              <template v-slot:title>
                <div class="text-h6 text-weight-bold">Other Experience</div>
                <div class="text-subtitle1 text-primary">Active Since 2009</div>
              </template>
              <div class="text-grey-4 q-mt-sm">
                <ul class="q-pl-md">
                  <li><strong>Surf Instructor</strong> – Take Surf, El Palmar, Cádiz (2022)</li>
                  <li><strong>Team Lead / Surf Instructor</strong> – Alamar Surf, Salinas, Asturias (2018–2021)</li>
                  <li><strong>Military Service</strong> – Finland (2018)</li>
                  <li><strong>Flight Attendant</strong> – Vueling Airlines, Barcelona (2009–2011)</li>
                </ul>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </div>
    </div>

    <!-- Studies & Languages Section -->
    <div class="section-container q-pa-xl">
      <div class="row q-col-gutter-xl">
        <!-- Education -->
        <div class="col-12 col-md-6">
          <div class="text-center q-mb-lg">
            <h2 class="text-h4 text-weight-bold">Education</h2>
            <div class="separator bg-primary q-mx-auto"></div>
          </div>
          <q-list padding class="text-grey-4">
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="school" size="lg" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">FP Superior DAM</q-item-label>
                <q-item-label caption class="text-grey-5">Desarrollo de Aplicaciones Multiplataforma</q-item-label>
                <q-item-label caption class="text-primary">Currently Studying</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="code" size="lg" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">Bootcamp Frontend</q-item-label>
                <q-item-label caption class="text-grey-5">Codespace</q-item-label>
                <q-item-label caption>Completed</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Languages -->
        <div class="col-12 col-md-6">
          <div class="text-center q-mb-lg">
            <h2 class="text-h4 text-weight-bold">Languages</h2>
            <div class="separator bg-primary q-mx-auto"></div>
          </div>
          <div class="q-gutter-y-md">
            <div>
              <div class="flex justify-between text-subtitle1 text-white">
                <span>Spanish</span>
                <span class="text-primary text-weight-bold">Native</span>
              </div>
              <q-linear-progress value="1.0" color="primary" rounded size="10px" />
            </div>
            <div>
              <div class="flex justify-between text-subtitle1 text-white">
                <span>English</span>
                <span class="text-primary text-weight-bold">Native</span>
              </div>
              <q-linear-progress value="1.0" color="primary" rounded size="10px" />
            </div>
            <div>
              <div class="flex justify-between text-subtitle1 text-white">
                <span>Finnish</span>
                <span class="text-primary text-weight-bold">Mid Level</span>
              </div>
              <q-linear-progress value="0.6" color="primary" rounded size="10px" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="section-container q-pa-xl">
      <div class="text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold">Get In Touch</h2>
        <div class="separator bg-primary q-mx-auto"></div>
        <p class="text-h6 text-grey-5 q-mt-md" style="max-width: 700px; margin-left: auto; margin-right: auto;">
          I am currently **self-employed** and open to collaborating on innovative web projects or artistic
          commissions.
          Whether you need a full-stack solution or a creative eye, let's build something amazing together.
        </p>
      </div>
      <div class="row justify-center q-gutter-lg">
        <q-btn color="primary" icon="mail" label="Email Me" size="lg" rounded class="q-px-xl"
          href="mailto:greenoliverj@gmail.com" />
        <q-btn outline color="white" icon="fab fa-linkedin" label="LinkedIn" size="lg" rounded class="q-px-xl"
          href="https://www.linkedin.com/in/oliver-green-12b03784/" target="_blank" />

      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { ParticleSystem } from "src/utils/particle-canvas";

export default defineComponent({
  name: "IndexPage",
  components: {
    ChoiceCards: require("components/ChoiceCards.vue").default
  },
  setup() {
    const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Freelancer", "Creative Technologist"];
    const currentRole = ref("");
    const showFab = ref(false);
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout = null;
    const heroRef = ref(null);
    const particleCanvas = ref(null);
    let particleSystem = null;

    const type = () => {
      const current = roles[roleIndex];
      if (isDeleting) {
        currentRole.value = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentRole.value = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = 100;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }

      typeTimeout = setTimeout(type, typeSpeed);
    };

    const handleScroll = () => {
      showFab.value = window.scrollY > 400;
    };

    const downloadCV = () => {
      const link = document.createElement('a');
      link.href = 'CV_Oliver_Green_ENG_Nov2025.pdf';
      link.download = 'CV_Oliver_Green_ENG_Nov2025.pdf';
      link.click();
    };


    const updateMousePosition = (e) => {
      // Existing glow logic...
      const rect = heroRef.value.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroRef.value.style.setProperty("--mouse-x", `${x}px`);
      heroRef.value.style.setProperty("--mouse-y", `${y}px`);

      // Update mouse for particles
      if (particleSystem) {
        particleSystem.updateMouse(x, y);
      }
    };

    onMounted(() => {
      type();
      window.addEventListener("scroll", handleScroll);
      if (particleCanvas.value && heroRef.value) {
        particleSystem = new ParticleSystem(particleCanvas.value, heroRef.value);
        particleSystem.init();
        particleSystem.animate();
      }
    });

    onUnmounted(() => {
      clearTimeout(typeTimeout);
      window.removeEventListener("scroll", handleScroll);
      if (particleSystem) {
        particleSystem.stop();
      }
    });

    return {
      currentRole,
      downloadCV,
      showFab,
      heroRef,
      updateMousePosition,
      particleCanvas,
    };
  }
});
</script>

<style scoped>
.hero-section {
  min-height: 70vh;
  position: relative;
  /* background:
    radial-gradient(circle at 70% 30%, rgba(70, 94, 127, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 20% 70%, rgba(155, 89, 182, 0.05) 0%, transparent 40%); */
}

.mouse-glow {
  position: relative;
  background:
    radial-gradient(circle at 70% 30%, rgba(70, 94, 127, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 20% 70%, rgba(155, 89, 182, 0.05) 0%, transparent 40%);
  overflow: hidden;
}

.mouse-glow::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(68, 106, 160, 0.15),
      rgba(155, 89, 182, 0.05),
      transparent 60%);
  z-index: 0;
  pointer-events: none;
  transition: background 0.3s ease;
}

.hero-section>div {
  z-index: 1;
}

.hero-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
  pointer-events: none;
}

.hero-avatar {
  width: 300px;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  background: rgba(255, 255, 255, 0.03);
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease;
}

.hero-avatar:hover {
  transform: scale(1.02);
}

.separator {
  height: 4px;
  width: 60px;
  margin-top: 10px;
  border-radius: 2px;
}

.bg-dark-page {
  background-color: #1a1a1a;
}

/* Typing Cursor */
.cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

/* Bounce Animation */
.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

.cv-fab {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: slideInUp 0.8s ease-out;
}

.cv-fab:hover {
  transform: scale(1.1) rotate(5deg);
}

@keyframes slideInUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }

}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.relative-position {
  position: relative;
  z-index: 2;
}

.hero-signature {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 150px;
  height: auto;
  filter: invert(1) opacity(0.8);
  transform: rotate(-5deg);
  pointer-events: none;
  z-index: 10;
  animation: sign-in 2s ease-out forwards;
  opacity: 0;
}

@keyframes sign-in {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.8);
    filter: invert(1) blur(5px);
  }

  to {
    opacity: 0.8;
    transform: rotate(-5deg) scale(1);
    filter: invert(1) blur(0);
  }
}

.avatar-container:hover .hero-signature {
  opacity: 1;
  transform: rotate(-2deg) scale(1.1);
  transition: all 0.4s ease;
}
</style>
