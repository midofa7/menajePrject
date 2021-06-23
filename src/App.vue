
<template>
  <div><div class="lesite___web">
  <div class="icone_conatct">
  
  
  
           <router-link
                        :to="{ path: '/Contact', name: 'Contact'}"
                      >   
                      <i class="fas fa-comments"></i> 
                    </router-link>
                         </div>
      <div class="munedepage"><munedepage/></div>
      <div class="home vue__de__site"><router-view/></div>
      <div class="footer_site"><foter/></div></div>
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
  created: function () { 

    
  },
  methods: {},
};
</script>
<style scoped>
</style>