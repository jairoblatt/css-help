<template>
  <div class="preview-container">
    <div class="code-view">
      <code-view :items="[{name:'box-shadow:', value:this.boxShadow}]" />
    </div>
    <div class="preview-box">
      <div class="preview" :style="`box-shadow: ${ boxShadow}  `"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CodeView from "../CodeView";
export default {
  components: { CodeView },
  computed: {
    ...mapGetters(["inset", "blur", "spread", "axisY", "axisX", "color"]),
    boxShadow() {
      return `${this.inset ? "inset" : ""} ${this.color}  ${this.axisX}px ${
        this.axisY
      }px ${this.blur}px  ${this.spread}px`;
    },
  },
};
</script>
