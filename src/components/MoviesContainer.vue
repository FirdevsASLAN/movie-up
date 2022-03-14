<template>
  <section>
    <v-container class="search__container">
      <card v-for="movie in movies" :key="movie.Title" :movie="movie" />
    </v-container>
    <v-container class="d-flex justify-center my-10">
      <v-pagination
        v-model="page"
        :length="pageNum"
        :total-visible="7"
        color="amber accent-3"
        dark
      />
    </v-container>
  </section>
</template>

<script>
import Card from "@/components/VerticalCard.vue";

export default {
  components: {
    Card,
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
    totalResults: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    pageNum() {
      return Math.ceil(this.totalResults / 10);
    },
  },
  created() {
    this.page = parseInt(this.$route.query.page);
  },
  watch: {
    page() {
      this.$router.push({
        path: this.$route.path,
        query: { s: this.$route.query.s, page: this.page },
      });
    },
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
