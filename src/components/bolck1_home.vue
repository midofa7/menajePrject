
<template>
  <div class="block1_home 88">
   <div class="image">
      <carousel :items="1" :loop="true">
     <img src="../assets/img/img1.png"/>  
     <img src="../assets/img/img2.png"/>  
     <img src="../assets/img/img3.png"/>   
     <img src="../assets/img/img7.png"/>  
     <img src="../assets/img/img11.png"/>  
     <img src="../assets/img/img12.png"/>  
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