<template>
    <v-card @click="$router.push({ name: 'item', query: { id: song.id, type: song.type } })" background="#270032"
        variant="tonal">
        <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title class="text-h6" style="max-width: 12rem; white-space: normal;">{{ song.title
                    }}</v-card-title>
                <v-card-subtitle>{{ song.type }}</v-card-subtitle>
            </div>
            <img :src="song.cover_image" alt="Imagem da música" width="160" />
        </div>
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
    width: 24rem;
    height: 14rem;
    cursor: pointer;

    img {
        margin-top: 1rem
    }

    &:hover {
        background-color: #3a003f;
    }
}
</style>