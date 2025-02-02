<script setup>

import { computed, ref } from 'vue';
import SongCard from '@/components/SongCard.vue';
import api from '@/services/api';

const search = ref('');
const songs = ref([]);

const types = [
  { value: 'artist', label: 'Artista' },
  { value: 'label', label: 'Gravadora' },
  { value: 'master', label: 'Lançamento principal' },
  { value: 'release', label: "Lançamento" }
];

const selectedTypes = ref([]);

const filteredSongs = computed(() => {
  if (selectedTypes.value.length === 0) {
    return songs.value;
  }
  return songs.value.filter(song => selectedTypes.value.includes(song.type));
});

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
  <v-layout class="rounded rounded-md">
    <!-- <v-navigation-drawer color="grey-lighten-1" location="left" width="150" permanent></v-navigation-drawer> -->

    <v-main class="d-flex flex-column">

      <div class="d-flex flex-row justify-center align-center text-field-container">
        <v-text-field label="Digite um termo para a busca (Artista, Álbum, Lançamento, etc...)" v-model="search"
          outlined @keyup.enter="fetchSongs"></v-text-field>

        <v-btn density="compact" :disabled="search.length === 0" @click="fetchSongs">
          Buscar
        </v-btn>
      </div>

      <div v-if="songs.length > 0" class="d-flex flex-row justify-start align-center ml-4 mt-1">
        <p>Filtrar por: &nbsp;</p>
        <v-chip-group v-model="selectedTypes" multiple>
          <v-chip v-for="type in types" :key="type.value" :value="type.value"
            :class="{ 'selected-chip': selectedTypes.includes(type.value) }">
            {{ type.label }}
          </v-chip>
        </v-chip-group>
      </div>

      <v-container v-if="songs.length > 0" class="mt-5">
        <v-row>
          <v-col v-for="song in filteredSongs" :key="song.id" cols="12" md="12" lg="4">
            <SongCard :song="song" />
          </v-col>
        </v-row>
      </v-container>

      <v-text v-else class="mt-4">Faça uma busca para exibir os resultados.</v-text>
    </v-main>
  </v-layout>
</template>

<style scoped>
.v-container {
  overflow: scroll;
  height: 90vh;
  width: 100rem;
  margin-bottom: 3rem;

  .v-main {
    display: flex !important;
    align-items: center !important;
  }
}

.text-field-container {
  height: 5rem;
  width: 100%;
  margin-top: 1rem;

  .v-btn {
    background-color: #48005d;
    color: #FFF;
    height: 2rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .v-btn:disabled {
    background-color: #2f2631;
    color: #666;
  }
}

.selected-chip {
  background-color: #370047;
}
</style>