<script setup>
import LandingPageParallax from "@/assets/landing_page_parallax.jpg";
import LandingPageCard from "@/components/LandingPageCard.vue";
</script>

<template>
    <v-layout>
        <v-main>
            <v-parallax scale="0.5" :src="LandingPageParallax" class="fixed-parallax">
                <div>
                    <h1>Seus artistas favoritos estão aqui</h1>
                    <h2>Busque no catálogo pelo álbum, gravadora ou artista.</h2>
                    <v-btn class="text-none text-subtitle-1 mt-4" text-color="#48005d" size="small" variant="flat"
                        href="/home">Acesse</v-btn>
                </div>
            </v-parallax>

            <v-container>
                <v-row justify="center">
                    <v-col cols="12" md="4">
                        <LandingPageCard title="Explore Coleções Raras" text="🔍 Encontre discos raros e edições limitadas diretamente do maior banco de dados musical." />
                    </v-col>
                    <v-col cols="12" md="4">
                        <LandingPageCard title="De olho das novidades..." text="Confira diferentes reimpressões de cada álbum" />
                    </v-col>
                    <v-col cols="12" md="4">
                        <LandingPageCard title="Card 1" text="This is the first card." />
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
    height: 30rem;

    div {
        position: absolute;
        bottom: 4rem;
        margin-left: 1rem;
        text-align: left;
        color: white;

        @media (min-width: 992px) {
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
}
</style>
