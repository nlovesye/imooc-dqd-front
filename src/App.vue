<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

<template>
  <div id="app">
    <Header />
    <router-view class="app-container" />
    <Footer />
  </div>
</template>

<style lang="scss">
.app-container {
  width: 100%;
  height: calc(100% - ($headerHeight + $footerHeight));
  background-color: $appContainerBackgroundColor;
  overflow-y: auto;
}
</style>
