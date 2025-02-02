<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { marked } from "marked"; // Import marked
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

// Compute the Markdown-parsed profile text
const parsedProfile = computed(() => {
    return item.value?.profile ? marked(item.value.profile) : "";
});
</script>

<template>
    <v-layout>
        <v-main>
            <div class="item-container" v-if="item">
                <h1>{{ item.name || item.title }}</h1>
                <h2>{{ typeLabel }}</h2>

                <div>
                    <v-row class="item-profile d-flex w-100">
                        <img width="300px" v-if="item.images?.length > 0" :src="item.images[0].uri">

                        <div v-if="item.profile" class="item-profile-text" v-html="parsedProfile"></div>

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

                    <div v-if="item.urls?.length > 0">
                        <h2>Links:</h2>
                        <v-col>
                            <div v-for="(url, index) in item.urls" :key="index">
                                <a :href="url" target="_blank">{{ url }}</a>
                            </div>
                        </v-col>
                    </div>

                    <div v-if="type === 'artists' && item.aliases?.length > 0">
                        <h2>Apelidos:</h2>

                        <v-row>
                            <div class="alias-container" v-for="(alias, index) in item.aliases" :key="index">
                                <div>
                                    <a :href="alias.resource_url">{{ alias.name }}</a>
                                </div>
                            </div>
                        </v-row>
                    </div>
                </div>
            </div>
            <div class="loading-container d-flex w-100 h-50 align-center justify-center" v-else>
                <v-progress-circular color="#48005d" indeterminate :size="43" :width="5"></v-progress-circular>
            </div>
        </v-main>
    </v-layout>
</template>

<style scoped>
.v-main {
    overflow: scroll;
    margin-bottom: 1rem;
}

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

.item-container {
    padding: 2rem;
    background-color: rgb(31, 31, 31);
}

.item-profile {
    display: flex;
    background: rgb(43, 43, 43);
    justify-content: space-around;
    align-items: flex-start;
    padding: 3rem;
    border-radius: 1rem;
    margin-top: 2rem;

    .item-profile-text {
        width: 70%;
        max-height: 20rem;
        overflow: scroll;
    }
}
</style>
