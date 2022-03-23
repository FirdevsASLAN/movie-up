<template>
  <v-card class="card mx-auto" max-width="383px">
    <div class="card__image">
      <div class="card__label rounded-lg amber accent-3 px-6 py-4">
        Biography
      </div>
      <v-icon
        v-if="favorites.find((fav) => fav.imdbID === movie.imdbID)"
        @click="removeFavorite(movie)"
        class="card__icon rounded-circle amber--text accent-3 white pa-3"
      >
        mdi-heart
      </v-icon>
      <v-icon
        v-else
        @click="addFavorite(movie)"
        class="card__icon rounded-circle amber--text accent-3 white pa-3"
      >
        mdi-cards-heart-outline
      </v-icon>
      <v-img :src="movie.Poster" width="100%" />
    </div>
    <div class="d-flex align-center my-9">
      <img src="@/assets/IMDB-icon.png" height="26px" width="49px" />
      <span class="text-h6 ml-5">{{ movie.imdb }}</span>
    </div>
    <v-card-text class="text-h6 amber--text accent-3 mb-1 pa-0">
      {{ movie.Year }}
    </v-card-text>
    <v-card-title
      @click="goMovie"
      class="pointer text-h5 font-weight-bold mb-5 pa-0"
    >
      {{ specialName }}
    </v-card-title>
    <v-card-text class="body-1 pa-0">
      The aging patriarch of an organized crime dynasty transfers control of his
      clandestine empire to his reluctant son.
    </v-card-text>
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
    specialName() {
      let movieType = this.movie.Type;
      let movieName = this.movie.Title;
      movieType = movieType[0].toUpperCase() + movieType.slice(1);
      if (movieName.length > 18) {
        movieName = movieName.slice(0, 18) + "...";
      }
      return `${movieType} - ${movieName}`;
    },
  },
  methods: {
    ...mapMutations(["addFavorite", "removeFavorite"]),
    goMovie() {
      this.$router.push(`details/${this.movie.imdbID}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  box-shadow: none !important;
  &__image {
    position: relative;
    height: 550px !important;
    overflow: hidden;
  }
  &__label {
    position: absolute;
    bottom: 15px;
    left: 15px;
    z-index: 3;
  }
  &__icon {
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 3;
  }
}
.pointer {
  cursor: pointer;
}
</style>
