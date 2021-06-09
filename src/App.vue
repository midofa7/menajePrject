
<template>
  <div>
      <div class="munedepage"><munedepage/></div>
      <div class="home vue__de__site"><router-view/></div>
      <div class="footer_site"><foter/></div>
  </div>
</template>

<script>

import munedepage from "./components/munepage";
import foter from "./components/footer";
export default {
  name: "Home",
  components: {
    munedepage,
    foter,
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>