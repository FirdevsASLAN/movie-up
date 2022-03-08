<template>
  <v-card class="card rounded-lg d-flex mx-auto pa-9" max-width="942px">
    <img src="@/assets/moviegodfather.png" height="386px" width="270px" />
    <div class="ml-16">
      <div class="d-flex justify-space-between">
        <div class="d-flex align-center">
          <img src="@/assets/IMDB-icon.png" height="26px" width="49px" />
          <span class="text-h6 ml-5">8.8</span>
        </div>
        <div class="d-flex">
          <div class="amber accent-3 rounded-lg px-6 py-4">Action</div>
          <div class="amber accent-3 rounded-lg px-6 py-4 ml-4">Biography</div>
        </div>
      </div>
      <v-card-subtitle class="amber--text accent-3"> 2019 </v-card-subtitle>

      <v-card-title class="text-h4"> The Godfather </v-card-title>

      <v-card-subtitle class="text-h6 grey--text lighten-2 font-weight-regular">
        The aging patriarch of an organized crime dynasty transfers control of
        his clandestine empire to his reluctant sons.
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="amber accent-3" dark class="text-capitalize">
          <v-icon>mdi-heart</v-icon>
          <span class="mr-2"> Add to favorites</span>
        </v-btn>
        <v-btn color="amber accent-3" class="text-capitalize" text>
          View Details
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fafafa !important;
  box-shadow: none !important;
}
</style>
