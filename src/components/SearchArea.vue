<template>
  <section class="white">
    <v-container class="search__container d-flex">
      <v-select
        label="Year"
        outlined
        height="68px"
        class="search__select"
        color="amber accent-3"
        :items="years"
      ></v-select>
      <v-select
        label="Type"
        outlined
        color="amber accent-3"
        height="68px"
        class="search__select mx-5"
      ></v-select>
      <v-text-field
        outlined
        height="68px"
        color="amber accent-3"
        label="Enter movie name here"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn
        class="ml-5"
        elevation="2"
        color="amber accent-3"
        dark
        width="180px"
        height="68px"
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
      years: [1996, 1986, 1995, 2002],
    };
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
