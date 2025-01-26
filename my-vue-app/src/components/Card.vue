<template>
  <div v-if="animeList.length > 0" class="grid gap-6 mt-5 grid-cols-4">
    <div v-for="anime in animeList" :key="anime.mal_id">
      <div
        class="card justify-center rounded h-fit m-6 max-h-[60rem] w-[] text-center bg-white">
        <div class="flex flex-col gap-4">
          <div class="">
            <a :href="anime.url" target="_blank">
              <loading-2 v-if="loading" />
              <img
                class="min-h-full w-full max-h-[25rem] object-cover"
                :src="anime.images.jpg.large_image_url"
                alt="" />
            </a>
          </div>
          <div class="flex justify-center py-6 px-6 w-fulls flex-wrap">
            <p class="text-black">{{ anime.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading2 from "./Loading2.vue";

export default {
  components: { Loading2 },
  name: "Card",
  props: {
    animeList: Array,
    loading: Boolean,
  },
};
</script>

<style scoped></style>
