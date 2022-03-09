<template>
  <section>
    <v-container>
      <div>details {{ id }}</div>
    </v-container>
  </section>
</template>

<script>
export default {
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
