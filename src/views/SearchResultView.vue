<template>
  <div>
    <nav-area routeName="Search Result" />
    <search-area />
    <v-container>
      <h1 class="text-h3 font-weight-bold">
        <span>Search result</span>
        <span class="amber--text accent-3"> Godfather</span>
      </h1>
    </v-container>
    <movie-card />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import SearchArea from "@/components/SearchArea.vue";
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    NavArea,
    SearchArea,
    MovieCard,
  },
};
</script>
