<script setup>
import api from "../services/api.js";

import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { marked } from "marked";

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

const parsedProfile = computed(() => {
    return item.value?.profile ? marked(item.value.profile) : "";
});
</script>

<template>
    <v-layout>
        <v-main>
            <div class="item-container" v-if="item">
                <div>
                    <v-row class="item-profile d-flex w-100">
                        <div>
                            <img class="item-profile-pic" v-if="item.images?.length > 0" :src="item.images[0].uri">
                        </div>

                        <div class="item-profile-text-container">
                            <h1 class="mb-4">{{ item.name || item.title }}</h1>
                            <v-row class="mb-1 ml-3">
                                <div v-if="item.artists?.length > 0">
                                    <p v-for="(artist, index) in item.artists" :key="index">{{ artist.name }}</p>
                                </div>
                            </v-row>
                            <h2>{{ typeLabel }}</h2>


                            <v-divider />
                            <div v-if="item.profile" class="item-profile-text" v-html="parsedProfile"></div>

                            <div class="item-container mt-1" v-if="item.tracklist">
                                <h3 class="mb-4">Lista de faixas</h3>
                                <v-divider />
                                <v-row v-for="(track, index) in item.tracklist" :key="index" class="track-item">
                                    <v-col>{{ track.position }}</v-col>
                                    <v-col>{{ track.title }}</v-col>
                                    <v-col>{{ track.duration }}</v-col>
                                </v-row>
                            </div>
                        </div>

                        <div class="ml-5" v-if="item.contact_info">
                            <h2>Informações de contato:</h2>
                            <p>{{ item.contact_info }}</p>
                        </div>
                    </v-row>

                    <v-row class="links-container">
                        <div v-if="item.urls?.length > 0">
                            <v-col>
                                <h2>Links:</h2>
                                <div v-for="(url, index) in item.urls" :key="index">
                                    <a :href="url" target="_blank">{{ url }}</a>
                                </div>
                            </v-col>
                        </div>

                        <div v-if="type === 'artists' && item.aliases?.length > 0">
                            <v-col class="alias-container">
                                <h2>Apelidos:</h2>
                                <div v-for="(alias, index) in item.aliases" :key="index">
                                    <a :href="alias.resource_url">{{ alias.name }}</a>
                                </div>
                            </v-col>
                        </div>
                    </v-row>
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
}

.links-container {
    margin: 1rem;
    /* align-items: center; */

    .alias-container {
        display: flex;
        flex-direction: column;
        margin: 0 4rem;

        img {
            margin-bottom: 1rem;
        }
    }
}

.item-container {
    padding: 2rem;
    background-color: #1f1f1f;
}

.item-profile {
    display: flex;
    background: #2b2b2b;
    justify-content: space-around;
    align-items: flex-start;
    padding: 3rem;
    border-radius: 1rem;

    @media (min-width: 1024px) {
        .item-profile-text-container {
            width: 70%;
        }
    }

    .item-profile-pic {
        border-radius: 1rem;

        @media (max-width: 1024px) {
            width: 12rem;
        }

        @media (min-width: 1024px) {
            width: 19rem;
        }
    }

    .item-profile-text {
        background-color: #1f1f1f;
        padding: 0.75rem 2rem;
        max-height: 20rem;
        overflow: scroll;
        border-radius: 0 0 1rem 1rem;
    }
}
</style>
