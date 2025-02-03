<template>
    <v-card @click="$router.push({ name: 'item', query: { id: item.id, type: item.type } })" background="#270032"
        variant="tonal">
        <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title class="text-h6" style="max-width: 12rem; white-space: normal;">{{ item.title
                    }}</v-card-title>
                <v-card-subtitle>{{ item.type }}</v-card-subtitle>
            </div>
            <img :src="item.cover_image" alt="Imagem do item" width="160" />
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'ItemCard',
    props: {
        item: {
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
    width: 20rem;
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