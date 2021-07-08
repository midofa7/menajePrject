
<template>
  <div><div class="lesite___web">
  
  <div class="icone_conatct">
  
  
  
           <router-link
                        :to="{ path: '/Contact', name: 'Contact'}"
                      >   
                      <i class="fas fa-comments"></i> 
                    </router-link>
                         </div>
    
      <div class=""><router-view/></div>
      <div class="footer_site"><foter/></div></div>
  </div>
</template>

<script>

import foter from "./components/footer";
export default {
  name: "Home",
  components: {
    
    foter,
  },

 data() {
    return {
      
    }
  },
  props: [],
  created: function () { 

  },
  methods: {

    
  },
};
</script>
<style scoped>
</style>