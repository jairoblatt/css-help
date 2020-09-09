<template>
  <div class="controllers">
    <v-card flat>
      <ExpansionPainel title="Transform">
        <v-card flat>
          <v-card-text>
            <v-slider
              label="Scale"
              dense
              color="purple dark-4"
              track-color="purple dark-5"
              v-model="scale"
              min="0"
              max="200"
            ></v-slider>
            <v-slider
              label="Rotate"
              dense
              color="purple dark-4"
              track-color="purple dark-5"
              v-model="rotate"
              min="0"
              max="360"
            ></v-slider>
            <v-divider></v-divider>
            <v-slider
              label="Translate X"
              dense
              color="purple dark-4"
              track-color="purple dark-5"
              v-model="translateX"
              min="-300"
              max="300"
            ></v-slider>
            <v-slider
              label="Translate Y"
              dense
              color="purple dark-4"
              track-color="purple dark-5"
              v-model="translateY"
              min="-300"
              max="300"
            ></v-slider>
            <v-divider></v-divider>
            <v-slider
              label="Skew X"
              dense
              color="purple dark-4"
              track-color="purple dark-5"
              v-model="skewX"
              min="-100"
              max="100"
            ></v-slider>
            <v-slider
              label="Skew Y"
              dense
              color="purple dark-4"
              track-color="purple dark-5"
              v-model="skewY"
              min="-100"
              max="100"
            ></v-slider>
          </v-card-text>
          <v-card-text>
            <v-btn
              depressed
              block
              outlined
              text
              right
              color="purple dark-4"
              @click="resetAll()"
            >Reset</v-btn>
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
    scale: 0,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    skewX: 0,
    skewY: "",
  }),
  methods: {
    ...mapMutations({
      scaleM: "scale",
      rotateM: "rotate",
      translateXM: "translateX",
      translateYM: "translateY",
      skewXm: "skewX",
      skewYm: "skewY",
    }),
    resetAll() {
      this.skewXm(0);
      this.skewYm(0);
      this.scaleM(0);
      this.rotateM(0);
      this.translateXM(0);
      this.translateYM(0);
    },
  },
  watch: {
    skewX(value) {
      this.skewXm(value);
    },
    skewY(value) {
      this.skewYm(value);
    },
    scale(value) {
      this.scaleM(value);
    },
    rotate(value) {
      this.rotateM(value);
    },
    translateX(value) {
      this.translateXM(value);
    },
    translateY(value) {
      this.translateYM(value);
    },
  },
};
</script>

