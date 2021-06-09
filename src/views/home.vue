
<template>
  <div class="pagehome">
   <div class="element_1"><bolck1home/></div>
   <div class="element_2"><bolck2home/></div>
  </div>
</template>

<script>

import bolck1home from "../components/bolck1_home";
import bolck2home from "../components/bolck2_home";

export default {
  name: "Home",
  components: {bolck2home, bolck1home ,
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>