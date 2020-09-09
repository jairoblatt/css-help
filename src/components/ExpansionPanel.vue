<template>
  <v-expansion-panels multiple flat accordion tile>
    <v-expansion-panel>
      <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <slot></slot>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>