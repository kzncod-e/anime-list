<template>
  <div class="hero h-full bg-repeat">
    <div class="flex h-full items-center justify-center w-full px-4">
      <div>
        <div
          v-if="animeStore.loading"
          class="h-full min-h-screen flex justify-center items-center">
          <Loader class="" />
        </div>
        <div v-else class="flex flex-col justify-center items-center">
          <Card
            :animeList="animeStore.animeList"
            :loading="animeStore.loading" />
          <div class="join flex justify-center m-14">
            <button @click="animeStore.prevPage" class="join-item btn">
              «
            </button>
            <button class="join-item btn">Page {{ animeStore.page }}</button>
            <button @click="animeStore.nextPage" class="join-item btn">
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAnimeStore } from "../stores/animeStore";
import { storeToRefs } from "pinia";
import Card from "../components/Card.vue";
import Loader from "../components/Loading.vue";

export default {
  components: { Card, Loader },
  name: "Home",
  setup() {
    const animeStore = useAnimeStore();
    //sadassad
    const { animeList, loading, page } = storeToRefs(animeStore);

    return { animeStore, animeList, loading, page };
  },
  mounted() {
    this.animeStore.fetchAnime();
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
