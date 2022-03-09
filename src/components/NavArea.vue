<template>
  <section class="nav">
    <v-container>
      <div class="text-h6">
        <span class="amber--text accent-3"> Home / </span>
        <span> {{ routeName }} </span>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  props: {
    routeName: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  background: linear-gradient(
    90deg,
    rgba(245, 197, 24, 0.26) 22.24%,
    rgba(251, 247, 252, 0) 100%
  );
}
</style>
