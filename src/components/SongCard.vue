<template>
    <v-card variant="tonal">
        <v-card-title>{{ song.title }}</v-card-title>
        <v-card-subtitle>{{ song.type }}</v-card-subtitle>
        <img :src="song.cover_image" alt="Imagem da música" width="160" />
    </v-card>
</template>

<script>
export default {
    name: 'SongCard',
    props: {
        song: {
            required: true
        }
    }
}
</script>

<style scoped>
.v-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 16rem;
    height: 18rem;
    background-color: #1976D2;
    color: white;

    img {
        margin-top: 1rem
    }
}
</style>