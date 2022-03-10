<template>
  <section>
    <v-container class="search__container">
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
    </v-container>
    <v-container class="d-flex justify-center my-10">
      <v-pagination
        v-model="page"
        :length="15"
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
  data() {
    return {
      page: 1,
    };
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
