<template>
  <div>
    <v-card flat color="blue">
      <v-subheader>Prueba</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="value"
          :rules="rules"
          label="How many?"
          step="10"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 90,
      slider: 40,
    };
  },
};
</script>

<style></style>
