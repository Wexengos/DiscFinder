<script setup>
import { ref } from 'vue';
import SongCard from '@/components/SongCard.vue';
import api from '@/services/api';

const search = ref('');
const songs = ref([]);

const fetchSongs = async () => {
  try {
    const response = await api.get('/database/search', { params: { q: search.value } });
    songs.value = response.data.results;
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
};

</script>

<template>
  <v-layout class="w-100 rounded rounded-md">
    <v-app-bar color="grey" title="Songs" height="48" flat></v-app-bar>

    <v-navigation-drawer color="grey-lighten-1" location="left" width="150" permanent></v-navigation-drawer>

    <v-main class="d-flex flex-column">
      <h1>Bem-vindo à database de músicas!</h1>
      <h2>Comece pesquisando por um título:</h2>

      <div class="d-flex flex-row justify-center align-center text-field-container">
        <v-text-field label="Digite um termo para a busca (Artista, Álbum, Lançamento, etc...)" v-model="search"
          outlined></v-text-field>

        <v-btn density="compact" :disabled="search.length === 0" @click="fetchSongs">
          Buscar
        </v-btn>

      </div>

      <v-text class="mt-1">Você digitou: {{ search }}</v-text>
      <!-- <v-text class="mt-1">Resultados: {{ songs }}</v-text> -->

      <v-container v-if="songs.length > 0" class="mt-4">
        <v-row>
          <v-col v-for="song in songs" :key="song.id" cols="12" md="6" lg="4">
            <SongCard :song="song" :title="song.title" :cover_art="song.cover_image" />
          </v-col>
        </v-row>
      </v-container>
      <v-text v-else class="mt-4">Nenhum resultado encontrado.</v-text>
    </v-main>
  </v-layout>
</template>

<style scoped>
.v-layout {
  display: flex;
  flex-direction: column;
  background: rgb(31, 31, 31);
}

.v-main {
  width: 100vw;
  height: 100vh;
}

.v-app-bar {
  background-color: #9b0000;
  color: white;
}

.text-field-container {
  height: 5rem;
  width: 80%;
  margin-top: 1rem;

  .v-btn {
    height: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
}
</style>