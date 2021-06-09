
<template>
  <div class="block1_home">
   <div class="image">
      <carousel :items="1" :loop="true">
     <img src="../assets/image/aimg1.png"/>  
     <img src="../assets/image/aimg2.png"/>  
     <img src="../assets/image/aimg3.png"/>  
     <img src="../assets/image/aimg4.png"/>  
     <img src="../assets/image/aimg5.png"/>  
     </carousel>
   </div>
   <div class="block_text">
     <div class="text">
      <h3>Wie zijn wij:
</h3>
      <p>Flexschoon is een ervaren en gedreven bedrijf met medewerkers die meer dan 15 jaar werkervaring in de schoonmaakbranche hebben opgedaan. Zo hebben wij alle ervaring en schoonmaakkennis in huis om onze klanten de beste beleving van de schoonmaak te kunnen geven. Daarnaast beschikken onze medewerkers over verschillende diploma’s zoals vloeronderhoud, specialistische reiniging en DKS diploma’s.</p>
    
     </div>
   
   
   </div>
 
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
export default {
  name: "Home",
  components: {
    carousel
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>