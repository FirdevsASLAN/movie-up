<template>
  <section class="header">
    <v-container>
      <h1 class="header__title text-h2 font-weight-medium white--text">
        Welcome to <b>MovieUP.</b>
      </h1>
      <p class="header__paragraph white--text mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p></v-container
    >
  </section>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
.header {
  aspect-ratio: 2.78;
  background-image: url("@/assets/header-background.png");
  padding-top: 7.9rem;
  &__paragraph {
    max-width: 36.5rem;
  }
  &__title {
    max-width: 34rem;
  }
}
</style>
