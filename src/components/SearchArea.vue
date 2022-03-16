<template>
  <section class="white">
    <v-container class="search__container d-flex">
      <v-text-field
        outlined
        height="68px"
        color="amber accent-3"
        label="Year"
        v-model="year"
      ></v-text-field>
      <v-select
        label="Type"
        outlined
        color="amber accent-3"
        height="68px"
        class="search__select mx-5"
        v-model="type"
        :items="types"
      ></v-select>
      <v-text-field
        outlined
        height="68px"
        color="amber accent-3"
        label="Enter movie name here"
        append-icon="mdi-magnify"
        v-model="search"
      ></v-text-field>
      <v-btn
        class="ml-5"
        elevation="2"
        color="amber accent-3"
        dark
        width="180px"
        height="68px"
        @click="searchMovie"
      >
        <span> Search </span>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      year: "",
      types: ["movie", "series", "episode"],
      type: "",
      search: "",
    };
  },
  methods: {
    searchMovie() {
      const typeStr = this.type?.length > 0 ? `&type=${this.type}` : "";
      const yearStr = this.year?.length > 0 ? `&year=${this.year}` : "";
      this.$router.push(`/search?s=${this.search}${typeStr}${yearStr}&page=1`);
      this.search = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  &__container {
    max-width: 75rem !important;
  }
  &__select {
    max-width: 170px !important;
  }
}
</style>
