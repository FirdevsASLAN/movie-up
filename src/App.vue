<template>
  <v-app>
    <v-app-bar app color="white" height="128">
      <v-container class="d-flex align-center">
        <img src="@/assets/MovieUpLogo.png" alt="" />
        <v-spacer />
        <v-btn text>
          <router-link
            class="text-decoration-none"
            :class="linkClass(activePath === '/')"
            :to="'/'"
            >Home</router-link
          >
        </v-btn>
        <v-btn text>
          <router-link
            class="text-decoration-none"
            :class="linkClass(activePath === '/favorites')"
            :to="'/favorites'"
            >Favorites</router-link
          >
        </v-btn>
        <v-spacer />
        <v-text-field
          outlined
          label="Search"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    activePath: "",
  }),
  updated() {
    this.activePath = this.$route.path;
  },
  created() {
    this.activePath = this.$route.path;
  },
  methods: {
    linkClass(isActive) {
      return isActive ? "amber--text accent-3" : "black--text";
    },
  },
};
</script>

<style lang="scss">
.container {
  @media (min-width: 1904px) {
    max-width: 1400px !important;
  }
}
.navbar {
  height: 128px !important;
}

.v-toolbar-content {
  height: 128px !important;
}
</style>
