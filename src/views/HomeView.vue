<template>
  <div>
    <home-header />
    <search-area />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import SearchArea from "@/components/SearchArea.vue";

export default {
  name: "HomeView",
  components: {
    HomeHeader,
    SearchArea,
  },
};
</script>
