<template>
    <v-card variant="tonal">
        <h3>{{ title }}</h3>
        <img :src="cover_art" alt="Imagem da música" width="160"/>
    </v-card>
</template>

<script>
export default {
    name: 'SongCard',
    props: {
        title: {
            required: true
        },
        cover_art: {
            required: false
        }
    }
}
</script>

<style scoped>
.v-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12rem;
    height: 18rem;
    background-color: #1976D2;
    color: white;
}
</style>