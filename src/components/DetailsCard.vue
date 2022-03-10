<template>
  <v-card class="card rounded-lg d-flex mx-auto pa-9">
    <img src="@/assets/moviegodfather.png" height="392px" width="281px" />
    <div class="ml-16">
      <div class="d-flex justify-space-between">
        <div class="d-flex align-center">
          <img src="@/assets/IMDB-icon.png" height="26px" width="49px" />
          <span class="text-h6 ml-5">8.8</span>
        </div>
        <v-card-actions>
          <v-btn color="amber accent-3" dark class="text-capitalize">
            <v-icon>mdi-heart</v-icon>
            <span class="mr-2"> Add to favorites</span>
          </v-btn>
        </v-card-actions>
      </div>
      <v-card-subtitle class="amber--text accent-3 pa-0">
        2019
      </v-card-subtitle>

      <v-card-title class="text-h4 pa-0"> The Godfather </v-card-title>

      <v-card-subtitle
        class="text-h6 grey--text lighten-2 font-weight-regular pa-0 my-3"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </v-card-subtitle>

      <div class="d-flex">
        <div class="amber accent-3 rounded-lg px-6 py-4">Action</div>
        <div class="amber accent-3 rounded-lg px-6 py-4 ml-4">Biography</div>
        <div class="amber accent-3 rounded-lg px-6 py-4 ml-4">Action</div>
        <div class="amber accent-3 rounded-lg px-6 py-4 ml-4">Biography</div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: none !important;
}
</style>
