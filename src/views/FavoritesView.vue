<template>
  <div>
    <nav-area routeName="Favorites" />
    <v-container>
      <h1 class="text-h3 font-weight-bold">
        <span>Favorites</span>
      </h1>
    </v-container>
    <search-container />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import SearchContainer from "@/components/SearchContainer.vue";
export default {
  components: {
    NavArea,
    SearchContainer,
  },
};
</script>
