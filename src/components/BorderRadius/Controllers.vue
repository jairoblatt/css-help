<template>
  <div class="controllers">
    <v-card flat>
      <ExpansionPainel title="Border">
        <v-card flat>
          <v-card-text>
            <v-color-picker show-swatches v-model="color"></v-color-picker>
          </v-card-text>
          <v-card-text>
             <v-slider label="Size" dense color="purple dark-4" track-color="purple dark-5" v-model="size" min="1" max="500"></v-slider>
          </v-card-text>
          <v-col class="d-flex" cols="12" sm="8">
            <v-select :items="bordersStyle" v-model="style" dense label="Outlined style" outlined></v-select>
          </v-col>
        </v-card>
      </ExpansionPainel>
      <ExpansionPainel title="Radius">
        <v-card flat>
          <v-card-text>
            <v-slider  label="All" dense color="purple dark-4" track-color="purple dark-5" v-model="all" max="500"></v-slider>
            <v-divider></v-divider>
            <v-slider label="Top-left" dense color="purple dark-4" track-color="purple dark-5" v-model="top" max="500"></v-slider>
            <v-slider label="Top-right" dense color="purple dark-4" track-color="purple dark-5" v-model="left" max="500"></v-slider>
            <v-slider label="Bottom-left" dense color="purple dark-4" track-color="purple dark-5" v-model="right" max="500"></v-slider>
            <v-slider label="Bottom-right" dense color="purple dark-4" track-color="purple dark-5" v-model="bottom" max="500"></v-slider>
          </v-card-text>
        </v-card>
      </ExpansionPainel>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ExpansionPainel from "../ExpansionPanel";
export default {
  components: { ExpansionPainel },
  data: () => ({
    all: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    style: "",
    size: 0,
    color: "",
    bordersStyle: [
      "Solid",
      "Dotted",
      "Dashed",
      "Double",
      "Groove",
      "Ridge",
      "Inset",
      "Outset",
      "Inherit",
      "Hidden",
      "None",
    ],
  }),
  methods: {
    ...mapMutations({
      allM: "all",
      topM: "top",
      rightM: "right",
      bottomM: "bottom",
      leftM: "left",
      styleM: "style",
      sizeM: "size",
      colorM: "color",
    }),
  },
  watch: {
    color(value) {
      this.colorM(value);
    },
    all(value) {
      this.allM(value);
    },
    style(value) {
      this.styleM(value);
    },
    size(value) {
      this.sizeM(value);
    },
    top(value) {
      this.topM(value);
    },
    right(value) {
      this.rightM(value);
    },
    bottom(value) {
      this.bottomM(value);
    },
    left(value) {
      this.leftM(value);
    },
  },
};
</script>

