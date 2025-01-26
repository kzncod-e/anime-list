<template>
  <nav class="navbar">
    <ul>
      <li class="text-red-300"><a href="/">Home</a></li>
      <li><a class="cursor-pointer" @click="fetchPopularAnime">Popular</a></li>
      <li><a href="#genres">Genres</a></li>
    </ul>
  </nav>
</template>

<script>
import { useAnimeStore } from "../stores/animeStore";

export default {
  name: "Navbar",
  setup() {
    const animeStore = useAnimeStore();

    const fetchPopularAnime = () => {
      animeStore.fetchPopularAnime();
    };

    return { fetchPopularAnime };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  float: left;
}

.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar li a:hover {
  background-color: #ddd;
  color: black;
}
</style>
