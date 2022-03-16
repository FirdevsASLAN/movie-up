<template>
  <div>
    <nav-area :routeName="movie.Title" />
    <section>
      <v-container>
        <details-card :movie="movie" />
      </v-container>
    </section>
    <related-movies />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import DetailsCard from "@/components/DetailsCard.vue";
import RelatedMovies from "@/components/RelatedMovies.vue";
import axios from "axios";

export default {
  components: {
    NavArea,
    DetailsCard,
    RelatedMovies,
  },
  data() {
    return {
      id: "",
      movie: [],
    };
  },
  created() {
    this.id = this.$route.params.id;

    axios
      .get(`https://omdbapi.com/?i=${this.$route.params.id}&apikey=2ccf4c7c`)
      .then((res) => {
        this.movie = res.data;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>
