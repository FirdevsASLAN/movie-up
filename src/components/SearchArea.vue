<template>
  <section class="white">
    <v-container class="search__container d-flex">
      <v-select :items="items" label="Year" outlined></v-select>
      <v-select :items="items" label="Type" outlined></v-select>
      <v-text-field
        outlined
        label="Enter movie name here"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn elevation="2" color="amber accent-3" dark>
        <span> Search </span>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.search {
  &__container {
    max-width: 75rem;
  }
}
</style>
