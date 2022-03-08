<template>
  <section>
    <v-container>
      <h1 class="text-h4 font-weight-medium black--text">Popular Movies</h1>
      <v-carousel hide-delimiters class="carousel">
        <v-carousel-item v-for="color in [0, 1, 2, 3, 4]" :key="color">
          <card />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>

<script>
import Card from "@/components/PopularMoviesCard.vue";

export default {
  components: {
    Card,
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  width: max-content;
}
</style>
