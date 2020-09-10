<template>
  <div class="controllers">
    <v-card outlined>
      <ExpansionPanel title="Box">
        <v-card-text>
          <v-color-picker show-swatches v-model="color"></v-color-picker>
          <v-switch v-model="inset" color="purple dark-4" class="mx-2" label="Inverter"></v-switch>
          <v-slider
            label="Blur"
            dense
            color="purple dark-4"
            track-color="purple dark-5"
            v-model="blur"
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
        <v-card-text></v-card-text>
      </ExpansionPanel>
    </v-card>
  </div>
</template>

<script>
import ExpansionPanel from "../ExpansionPanel";
import { mapMutations } from "vuex";
export default {
  components: { ExpansionPanel },
  data: () => ({
    blur: 10,
    spread: 10,
    axisX: 0,
    axisY: 0,
    color: '#fffff',
    inset: false,
  }),
  methods: {
    ...mapMutations({
      blurM: "blur",
      spreadM: "spread",
      axisYM: "axisY",
      axisXM: "axisX",
      colorM: "color",
      insetM: "inset",
    }),
  },
  watch:{
    blur(value){
      this.blurM(value);
    },
     spread(value){
      this.spreadM(value);
    },
     axisY(value){
      this.axisYM(value);
    },
     axisX(value){
      this.axisXM(value);
    },
     color(value){
      this.colorM(value);
    },
     inset(value){
      this.insetM(value);
    }
  }
};
</script>