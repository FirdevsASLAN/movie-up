<template>
  <div>
    <nav-area routeName="Search Result" />
    <search-area />
    <v-container>
      <h1 class="text-h3 font-weight-bold">
        <span>Search result</span>
        <span class="amber--text accent-3 text-capitalize">
          {{ searchName }}</span
        >
      </h1>
    </v-container>
    <movies-container :movies="movies" :totalResults="totalResults" />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import SearchArea from "@/components/SearchArea.vue";
import MoviesContainer from "@/components/MoviesContainer.vue";
import axios from "axios";

export default {
  components: {
    NavArea,
    SearchArea,
    MoviesContainer,
  },
  data() {
    return {
      search: "",
      movies: [],
      totalResults: 0,
      searchName: "",
    };
  },
  created() {
    this.searchName = this.$route.query.s;
    const typeStr = this.$route.query.type
      ? `&type=${this.$route.query.type}`
      : "";
    const yearStr = this.$route.query.year
      ? `&year=${this.$route.query.year}`
      : "";

    axios
      .get(
        `https://omdbapi.com/?s=${this.$route.query.s}&apikey=2ccf4c7c${yearStr}${typeStr}&page=${this.$route.query.page}`
      )
      .then((res) => {
        this.movies = res.data.Search;
        // this.movies = this.movies.map(async (movie) => {
        //   const imdb = await axios.get(
        //     `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=2ccf4c7c`
        //   );
        //   movie.imdb = imdb;
        // });
        this.totalResults = parseInt(res.data.totalResults);
        console.log(res.data.Search);
      })
      .catch((err) => console.log(err));
  },
};
</script>
