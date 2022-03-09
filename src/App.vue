<template>
  <v-app>
    <v-app-bar app color="white" height="128">
      <v-container class="d-flex align-center">
        <img src="@/assets/MovieUpLogo.png" alt="" />
        <v-spacer />
        <v-btn text>
          <router-link class="text-decoration-none" :to="'/'">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link class="text-decoration-none" :to="'/favorites'"
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
    //
  }),
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 128px !important;
}
.v-toolbar-content {
  height: 128px !important;
}
</style>
