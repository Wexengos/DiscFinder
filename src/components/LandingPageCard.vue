<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        default: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
    }
});

</script>

<template>
    <v-card>
        <v-img color="surface-variant" height="110" :src="imgSrc"
            cover>
        </v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text class="card-text pt-4 h-100">
            {{ text }}
        </v-card-text>
    </v-card>
</template>

<style scoped>
.v-card {
    width: 20rem;
    height: 17.8rem;
    border-radius: 0.3rem;
    background-color: #202020;
    text-align: center;
    color: #d8d8d8;
    overflow: hidden;

    .card-text {
        background-color: #313131;
        font-size: 1rem;
    }
}
</style>