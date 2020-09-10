<template>
  <div :class="`code-container `">
    <div v-if="copy" class="copy">
      <p>Copied to clipboard</p>
    </div>
    <div class="code" v-for="(item,i) in items" :key="i">
      <span class="code-color-1">{{item.name}}</span>
      <span class="code-color-3">{{item.value}}</span>
    </div>
    <div class="clipboard">
      <button type="button" @click="doCopy">
        <v-icon :class="`${copy ?'check':''}`">{{copy? 'mdi-check': 'mdi-arrange-bring-forward'}}</v-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    copy: false,
  }),
  props: {
    items: {
      type: Array,
      default: false,
    },
  },

  computed: {
    codeFilter() {
      const code = [];
      this.items.forEach((e) => {
        code.push(e.name + e.value)
      });
      return code.join(" ");
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.codeFilter).then((resp) => {
        this.copy = true;
        setTimeout(() => {
          this.copy = false;
        }, 5000);
      });
    },
  },
};
</script>