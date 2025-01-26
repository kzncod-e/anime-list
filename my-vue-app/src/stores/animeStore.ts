// stores/counter.js
import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useAnimeStore = defineStore("anime", () => {
  const animeList = ref([]); // List of anime
  const loading = ref(false); // Loading state
  const page = ref(1); // Current page

  // Fetch all anime for the current page
  const fetchAnime = async () => {
    try {
      loading.value = true;
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${page.value}`
      );
      animeList.value = response.data.data;
    } catch (error) {
      console.error(`Error while fetching all anime: ${error}`);
      animeList.value = [];
    } finally {
      loading.value = false;
    }
  };

  // Fetch popular anime for the current page
  const fetchPopularAnime = async () => {
    try {
      loading.value = true;
      const response = await axios.get(
        `https://api.jikan.moe/v4/top/anime?page=${page.value}`
      );
      animeList.value = response.data.data;
    } catch (error) {
      console.error(`Error while fetching popular anime: ${error}`);
      animeList.value = [];
    } finally {
      loading.value = false; // Ensure loading state is reset
    }
  };

  // Go to the next page
  const nextPage = async () => {
    page.value++;
    await fetchAnime();
  };

  // Go to the previous page
  const prevPage = async () => {
    if (page.value > 1) {
      page.value--;
      await fetchAnime();
    }
  };

  return {
    animeList,
    loading,
    page,
    fetchAnime,
    fetchPopularAnime, // Corrected typo here
    nextPage,
    prevPage,
  };
});
