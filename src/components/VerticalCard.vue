<template>
  <v-card class="card mx-auto" max-width="383px">
    <div class="card__image">
      <div class="card__label rounded-lg amber accent-3 px-6 py-4">
        Biography
      </div>
      <v-icon class="card__icon rounded-circle amber--text accent-3 white pa-3">
        mdi-heart
      </v-icon>
      <v-img :src="movie.Poster" width="100%" />
    </div>
    <div class="d-flex align-center my-9">
      <img src="@/assets/IMDB-icon.png" height="26px" width="49px" />
      <span class="text-h6 ml-5">8.8</span>
    </div>
    <v-card-text class="text-h6 amber--text accent-3 mb-1 pa-0">
      {{ movie.Year }}
    </v-card-text>
    <v-card-title class="text-h5 font-weight-bold mb-5 pa-0">
      {{ movie.Title }}
    </v-card-title>
    <v-card-text class="body-1 pa-0">
      The aging patriarch of an organized crime dynasty transfers control of his
      clandestine empire to his reluctant son.
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  box-shadow: none !important;
  &__image {
    position: relative;
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
</style>
