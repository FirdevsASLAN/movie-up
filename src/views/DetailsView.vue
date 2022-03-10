<template>
  <div>
    <nav-area :routeName="id" />
    <section>
      <v-container>
        <details-card />
      </v-container>
    </section>
    <related-movies />
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
import DetailsCard from "@/components/DetailsCard.vue";
import RelatedMovies from "@/components/RelatedMovies.vue";

export default {
  components: {
    NavArea,
    DetailsCard,
    RelatedMovies,
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>
