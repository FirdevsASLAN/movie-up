<template>
  <section>
    <v-container class="search__container">
      <movie-card />
      <movie-card />

      <movie-card />

      <movie-card />

      <movie-card />

      <movie-card />
    </v-container>
  </section>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 24px;
  }
}
</style>
