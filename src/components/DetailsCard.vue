<template>
  <v-card class="card rounded-lg d-flex mx-auto pa-9">
    <img :src="movie.Poster" height="392px" width="281px" />
    <div class="ml-16">
      <div class="d-flex justify-space-between">
        <div class="d-flex align-center">
          <img src="@/assets/IMDB-icon.png" height="26px" width="49px" />
          <span class="text-h6 ml-5">{{ movie.imdbRating }}</span>
        </div>
        <v-card-actions>
          <v-btn
            color="amber accent-3"
            dark
            class="text-capitalize"
            @click="removeFavorite(movie)"
            v-if="favorites.find((fav) => fav.imdbID === movie.imdbID)"
          >
            <v-icon> mdi-cards-heart-outline </v-icon>
            <span class="mr-2"> Add to favorites</span>
          </v-btn>
          <v-btn
            color="amber accent-3"
            dark
            class="text-capitalize"
            v-else
            @click="addFavorite(movie)"
          >
            <v-icon>mdi-heart</v-icon>
            <span class="mr-2"> Remove from favorites</span>
          </v-btn>
          <v-btn color="amber accent-3" class="text-capitalize" text>
            View Details
          </v-btn>
        </v-card-actions>
      </div>
      <v-card-subtitle class="amber--text accent-3 pa-0">
        {{ movie.Year }}
      </v-card-subtitle>

      <v-card-title class="text-h4 pa-0"> {{ movie.Title }} </v-card-title>

      <v-card-subtitle
        class="text-h6 grey--text lighten-2 font-weight-regular pa-0 my-3"
        >{{ movie.Plot }}
      </v-card-subtitle>

      <div class="d-flex">
        <div
          class="amber accent-3 rounded-lg px-6 py-4 ml-4"
          v-for="genre in genres"
          :key="genre"
        >
          {{ genre }}
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(["favorites"]),

    genres() {
      return this.movie.Genre.split(", ");
    },
  },
  methods: {
    ...mapMutations(["addFavorite", "removeFavorite"]),
    goMovie() {
      this.$router.push(`details/${this.movie.imdbID}`);
    },
  },
  // updated() {
  //   console.log(this.movie.Genre);
  //   console.log(this.movie.Genre.split(", "));
  // },
};
</script>
<style lang="scss" scoped>
.card {
  box-shadow: none !important;
}
</style>
