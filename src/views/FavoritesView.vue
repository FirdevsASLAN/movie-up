<template>
  <div>
    <nav-area routeName="Favorites" />
    <v-container>
      <h1 class="text-h3 font-weight-bold">
        <span>Favorites</span>
      </h1>
    </v-container>
    <movies-container />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import MoviesContainer from "@/components/MoviesContainer.vue";
export default {
  components: {
    NavArea,
    MoviesContainer,
  },
};
</script>
