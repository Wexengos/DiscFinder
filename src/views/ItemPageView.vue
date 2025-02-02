<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import api from "../services/api.js";
import { ItemPageTypes } from "@/constants/ItemPageTypes.js";

const route = useRoute();
const id = route.query.id;
const type = route.query.type + 's';

const typeLabel = computed(() => {
    const itemType = ItemPageTypes.find(item => item.value === type);
    return itemType ? itemType.label : type;
});

const item = ref(null);

onMounted(async () => {
    try {
        const response = await api.get(`/${type}/${id}`);
        item.value = response.data;
    } catch (error) {
        console.error("Failed to fetch item:", error);
    }
});
</script>

<template>
    <v-layout>
        <v-main>
            <div v-if="item">
                <h1>{{ item.name || item.title }}</h1>
                <h2>{{ typeLabel }}</h2>

                <div>
                    <v-row class="d-flex w-100 justify-around">
                        <img width="300px" v-if="item.images?.length > 0" :src="item.images[0].uri">

                        <div class="ml-5" v-if="item.contact_info">
                            <h2>Informações de contato:</h2>
                            <p>{{ item.contact_info }}</p>
                        </div>

                        <div>
                            <div class="ml-5" v-if="item.genres?.length > 0">
                                <h2>Gênero(s):</h2>
                                <v-row>
                                    <p v-for="(genre, index) in item.genres" :key="index">{{ genre }}, </p>
                                </v-row>
                            </div>

                            <div class="ml-5" v-if="item.styles?.length > 0">
                                <h2>Estilo(s):</h2>
                                <v-row>
                                    <p v-for="(style, index) in item.styles" :key="index">{{ style }}, </p>
                                </v-row>
                            </div>
                        </div>
                    </v-row>

                    <div v-if="type === 'artists' && item.aliases?.length > 0">
                        <h2>Também conhecido(a) como:</h2>

                        <v-row>
                            <div class="alias-container" v-for="(alias, index) in item.aliases" :key="index">
                                <div>
                                    <img height="200px" :src="alias.thumbnail_url">
                                    <pre>{{ alias.name }}</pre>
                                </div>
                            </div>
                        </v-row>
                    </div>

                    <p>{{ item.profile }}</p>

                    <!-- <pre>{{ item }}</pre> -->
                </div>
            </div>
            <div v-else>
                Loading...
            </div>
        </v-main>
    </v-layout>
</template>

<style scoped>
.v-row {
    margin: 0;
    align-items: center;

    .alias-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;

        img {
            margin-bottom: 1rem;
        }
    }
}
</style>