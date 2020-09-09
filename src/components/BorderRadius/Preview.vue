<template>
  <div class="preview-container">
    <div class="code-view">
      <code-view :items="items" />
    </div>
    <div class="preview-box">
      <div class="preview-icon-container">
        <!-- UP -->
        <div class="icon-up">
          <div class="preview-icon up-left">
            <v-icon  :class="top || all ? 'active' :''">mdi-chevron-up</v-icon>
          </div>

          <div class="preview-icon bottom-right">
            <v-icon  :class="right || all? 'active' :''"> mdi-chevron-up</v-icon>
          </div>
        </div>
        <!-- bottom -->

        <div class="icon-bottom">
          <div class="preview-icon up-right">
            <v-icon :class="left || all? 'active' :''">mdi-chevron-up</v-icon>
          </div>
          <div class="preview-icon bottom-left">
            <v-icon :class="bottom || all? 'active' :''">mdi-chevron-up</v-icon>
          </div>
        </div>
      </div>

      <div class="preview" :style="`border-radius: ${borderRadius }; border:${border}`"></div>
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
      "top",
      "left",
      "bottom",
      "right",
      "all",
      "style",
      "size",
      "color",
    ]),
    borderRadius() {
      if (this.all) return `${this.all}px;`;
      else
        return `${this.top}px ${this.left}px ${this.bottom}px ${this.right}px;`;
    },
    border() {
      return `${this.style} ${this.color} ${this.size}px;`;
    },
    items() {
      return [
        {
          name: "border-radius:",
          value: this.borderRadius,
        },
        {
          name: "border:",
          value: this.border,
        },
      ];
    },
  },
};
</script>
