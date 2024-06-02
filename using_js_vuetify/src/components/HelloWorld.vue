<template>
  <v-container class="fill-height">
    <v-carousel>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>

    <v-card
      loading
      title="Card title"
      subtitle="Subtitle"
      text="..."
      variant="tonal"
    >
      <v-divider style="margin-top: 20px"></v-divider>
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>
    <v-divider style="margin-top: 20px"></v-divider>
    <v-btn prepend-icon="$vuetify"> Button </v-btn>
    <v-divider style="margin-top: 20px"></v-divider>
    <v-expansion-panels>
      <v-expansion-panel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<style lang="scss" scoped>
@use "../styles/settings.scss";
    .img {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      border-radius: 50% !important;
      overflow: hidden;
    }
    .img img {
      width: 100%;
    }
</style>
<script setup>
//
</script>
