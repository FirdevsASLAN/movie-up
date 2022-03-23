<template>
  <div>
    <nav-area routeName="Favorites" />
    <v-container>
      <h1 class="text-h3 font-weight-bold">
        <span>Favorites</span>
      </h1>
      <!-- <div v-if="favorites">
        <div v-for="(favorite, idx) in favorites" :key="idx">
          {{ favorite }}
        </div>
      </div>
      <v-text-field v-model="favInput" label="fav" outlined />
      <v-btn @click="addFavorites">Add Favorite</v-btn> -->
    </v-container>
    <movies-container :movies="favorites" />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import MoviesContainer from "@/components/MoviesContainer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  // data() {
  //   return {
  //     favorites: this.$store.state.favorites,
  //   };
  // },
  data() {
    return {
      favInput: "",
    };
  },
  computed: {
    ...mapGetters(["favorites"]),
  },
  components: {
    NavArea,
    MoviesContainer,
  },
  methods: {
    ...mapMutations(["addFavorite"]),
    addFavorites() {
      console.log(this.favInput);
      this.addFavorite(this.favInput);
    },
  },
};
</script>
