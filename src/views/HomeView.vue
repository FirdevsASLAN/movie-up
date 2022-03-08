<template>
  <div>
    <home-header />
    <search-area />
    <popular-movies />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import SearchArea from "@/components/SearchArea.vue";
import PopularMovies from "@/components/PopularMovies.vue";

export default {
  name: "HomeView",
  components: {
    HomeHeader,
    SearchArea,
    PopularMovies,
  },
};
</script>
