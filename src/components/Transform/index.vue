<template>
  <default>
    <div class="container">
      <v-col  md="4" sm="12">
        <controllers />
      </v-col>
      <v-col  md="4" sm="12">
        <preview />
      </v-col>
    </div>
  </default>
</template>

<script>
import Controllers from "./Controllers";
import Preview from "./Preview";
export default {
  components: { Controllers, Preview },
};
</script>