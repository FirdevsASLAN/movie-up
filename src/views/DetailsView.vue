<template>
  <div>
    <nav-area :routeName="id" />
    <div>details {{ id }}</div>
  </div>
</template>

<script>
import NavArea from "@/components/NavArea.vue";
export default {
  components: {
    NavArea,
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
