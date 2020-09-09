<template>
  <div id="app">
    <v-app>
      <v-tabs
        v-model="tab"
        color="purple dark--2"
        background-color="white"
        height="50"
       centered
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">Box Shadow</v-tab>
        <v-tab href="#tab-2">Border Radius</v-tab>
        <v-tab href="#tab-3">Transform</v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <BoxShadow />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <BorderRadius />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-3">
            <v-card flat>
              <v-card-text>
                <Transform />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <!-- FOOTER  -->
      <Footer />
    </v-app>
  </div>
</template>

<script>
import BoxShadow from "./components/BoxShadow";
import BorderRadius from "./components/BorderRadius";
import Transform from "./components/Transform"
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { 
    BoxShadow,
    BorderRadius, 
    Footer,
    Transform
    },
  data: () => ({
    tab: null,
  }),
};
</script>

<style>
@import url("./assets/style.css");
</style>
