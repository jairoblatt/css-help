<template>
  <div class="controllers">
    <v-card outlined>
      <ExpansionPanel title="Box">
        <v-card-text>
          <v-color-picker show-swatches v-model="color"></v-color-picker>
          <v-switch v-model="inset" color="purple dark-4" class="mx-2" label="Inverter"></v-switch>
          <v-slider
            label="Fade"
            dense
            color="purple dark-4"
            track-color="purple dark-5"
            v-model="fade"
            max="100"
          ></v-slider>
          <v-slider
            label="Spread"
            dense
            color="purple dark-4"
            track-color="purple dark-5"
            v-model="spread"
            max="100"
          ></v-slider>
          <v-slider
            label="Axis Y"
            dense
            color="purple dark-4"
            track-color="purple dark-5"
            v-model="axisY"
            min="-300"
            max="300"
          ></v-slider>
          <v-slider
            label="Axis X"
            dense
            color="purple dark-4"
            track-color="purple dark-5"
            v-model="axisX"
            min="-300"
            max="300"
          ></v-slider>
        </v-card-text>
        <v-card-text>
        </v-card-text>
      </ExpansionPanel>
    </v-card>
  </div>
</template>

<script>
import ExpansionPanel from "../ExpansionPanel";
export default {
  components: { ExpansionPanel },
  computed: {
    inset: {
      set(value) {
        this.$store.commit("inset", value);
      },
      get() {
        this.$store.getters.inset;
      },
    },

    fade: {
      set(value) {
        this.$store.commit("fade", value);
      },
      get() {
        return this.$store.getters.fade;
      },
    },

    spread: {
      set(value) {
        this.$store.commit("spread", value);
      },
      get() {
        return this.$store.getters.spread;
      },
    },

    axisY: {
      set(value) {
        this.$store.commit("axisY", value);
      },
      get() {
        return this.$store.getters.axisY;
      },
    },

    axisX: {
      set(value) {
        this.$store.commit("axisX", value);
      },
      get() {
        return this.$store.getters.axisX;
      },
    },

    color: {
      set(value) {
        this.$store.commit("color", value);
      },
      get() {
        return this.$store.getters.color;
      },
    },
  },
};
</script>