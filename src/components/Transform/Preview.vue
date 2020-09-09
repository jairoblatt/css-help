<template>
  <div class="preview-container">
    <div class="code-view">
      <code-view :items="items" />
    </div>
    <div class="preview-box">
      <div class="preview preview-transform" :style="`transform: ${ transform }`">
        <v-icon>mdi-chevron-up</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CodeView from "../CodeView";
export default {
  components: { CodeView },
  computed: {
    ...mapGetters([
      "scale",
      "rotate",
      "translateX",
      "translateY",
      "skewX",
      "skewY",
    ]),
    scaleProp() {
      if (!this.scale || this.scale == 100) return " ";
      return `scale(${this.scale / 100})`;
    },
    rotateProp() {
      if (!this.rotate) return " ";
      return `rotate(${this.rotate}deg)`;
    },
    translateProp(){
      if(!this.translateX && !this.translateY) return ' ';
      return `translate(${this.translateX}px, ${this.translateY}px)`
    },
    skewProp(){
      if(!this.skewY && !this.skewX) return " ";
        return `skew(${this.skewX}deg, ${this.skewY}deg)`
    },
    transform() {
      if (
        this.scale ||
        this.rotate ||
        this.translateX ||
        this.translateY ||
        this.skewX ||
        this.skewY
      ) {
        return `${this.scaleProp} ${this.rotateProp} ${this.translateProp} ${this.skewProp} ;`;
      } else {
        return " ";
      }
    },

    items() {
      return [
        {
          name: "transform:",
          value: this.transform,
        },
      ];
    },
  },
};
</script>
