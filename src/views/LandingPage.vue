<script setup>
import LandingPageParallax from "@/assets/landing_page_parallax.png";

import LandingPageCard from "@/components/LandingPageCard.vue";

import LandingPageCardMusic from "@/assets/landing_page_card_music.jpg";
import LandingPageCardDiscogs from "@/assets/landing_page_card_discogs.jpg";
import LandingPageCardReleases from "@/assets/landing_page_card_releases.jpg";

</script>

<template>
    <v-layout>
        <v-main>
            <v-parallax scale="0.5" :src="LandingPageParallax" class="fixed-parallax">
                <div>
                    <h1>Seus artistas favoritos estão aqui</h1>
                    <h2>Busque no catálogo pelo álbum, gravadora ou artista.</h2>
                    <v-btn class="text-none text-subtitle-1 mt-4" size="small" variant="flat"
                        href="/home">Acesse</v-btn>
                </div>
            </v-parallax>

            <v-container>
                <v-row justify="center">
                    <v-col class="landing-page-card-container" cols="12" sm="12" md="4">
                        <LandingPageCard :imgSrc="LandingPageCardMusic" title="Descubra Coleções Raras"
                            text="Explore discos raros e edições limitadas no maior banco de dados musical do mundo." />
                    </v-col>
                    <v-col class="landing-page-card-container" cols="12" md="4">
                        <LandingPageCard :imgSrc="LandingPageCardReleases" title="Por dentro das novidades"
                            text="Acompanhe as últimas reimpressões e novas edições de seus álbuns favoritos." />
                    </v-col>
                    <v-col class="landing-page-card-container" cols="12" md="4">
                        <LandingPageCard :imgSrc="LandingPageCardDiscogs" title="Busca Integrada ao Discogs"
                            text="Pesquise diretamente no catálogo do Discogs e encontre edições exclusivas com facilidade." />
                    </v-col>
                </v-row>
            </v-container>

        </v-main>
    </v-layout>
</template>

<style scoped>
.v-main {
    padding: 0 !important;
    overflow: scroll;
}

.fixed-parallax {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;

    div {
        position: absolute;
        bottom: 4rem;
        margin-left: 1rem;
        text-align: left;
        color: white;

        @media (min-width: 1023px) {
            margin-left: 8rem;
        }
    }

    h1,
    h2 {
        text-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 0, 0, 0.7);
    }
}


.v-container {
    margin-top: 2.25rem;
    width: 60%;

    @media (max-width: 1023px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}

.landing-page-card-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
</style>
