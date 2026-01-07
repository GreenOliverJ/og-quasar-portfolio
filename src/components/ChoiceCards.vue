<template>
    <div class="q-pa-md row items-start q-gutter-md justify-center move-up">
        <q-card
            class="glass-panel my-card col-xs-12 col-sm-6 col-md-3 bg-dark-card text-white pointer-cursor transform-hover">
            <q-card-section class="text-center">
                <q-icon name="architecture" size="4rem" color="primary" class="q-mb-md icon-hover" />
                <div class="text-h6 text-weight-bold">Robust Architecture</div>
            </q-card-section>

            <q-card-section class="text-grey-4 text-center">
                I build scalable, maintainable systems that grow with your business, ensuring long-term reliability and
                performance.
            </q-card-section>
        </q-card>

        <q-card
            class="glass-panel my-card col-xs-12 col-sm-6 col-md-3 bg-dark-card text-white pointer-cursor transform-hover">
            <q-card-section class="text-center">
                <q-icon name="psychology" size="4rem" color="accent" class="q-mb-md icon-hover" />
                <div class="text-h6 text-weight-bold">User-Centric UX</div>
            </q-card-section>

            <q-card-section class="text-grey-4 text-center">
                I prioritize the user experience, crafting intuitive interfaces that delight users and drive engagement.
            </q-card-section>
        </q-card>

        <q-card
            class="glass-panel my-card col-xs-12 col-sm-6 col-md-3 bg-dark-card text-white pointer-cursor transform-hover">
            <q-card-section class="text-center">
                <q-icon name="rocket_launch" size="4rem" color="secondary" class="q-mb-md icon-hover" />
                <div class="text-h6 text-weight-bold">End-to-End Delivery</div>
            </q-card-section>

            <q-card-section class="text-grey-4 text-center">
                From concept to deployment, I handle the full lifecycle, ensuring your product launches smoothly and on
                time.
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ChoiceCards'
})
</script>

<style scoped>
.my-card {
    border-radius: 1px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
}

.bg-dark-card {
    background-color: #1e1e1e;
}

.transform-hover:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    border-color: var(--q-primary);
}

.icon-hover {
    transition: transform 0.3s ease;
}

.transform-hover:hover .icon-hover {
    transform: scale(1.1);
}

.move-up {
    margin-top: -50px;
    position: relative;
    z-index: 1;
}

.glass-panel {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
}
</style>
