<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

</script>

<template>
    <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text class="card-text pt-4 h-100">
            {{ text }}
        </v-card-text>
    </v-card>
</template>

<style scoped>
.v-card {
    width: 21rem;
    height: 16.8rem;
    border-radius: 0.3rem;
    background-color: #202020;
    text-align: center;
    color: #d8d8d8;

    .card-text {
        background-color: #313131;
        font-size: 1rem;
    }
}
</style>