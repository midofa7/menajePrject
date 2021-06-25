
<template>
  <div class="block1_home 88">
   <div class="row">
      <div class="col-12 col-md-5">
   <div class="image">
   <div  class="text">
   <p>Wij staan voor FlexiBiliteit in de  schoonmaak</p>
   <p>Maandelijks opzegbaar</p>
   <p>schoonmaak van A tot Z</p>
   </div>
      <carousel :items="1" :loop="true">
     <img src="../assets/img/img11.png"/> 
     </carousel>
   </div>
</div>
      <div class="col-12 col-md-7">
       <div class="block_text">
     <div class="text">
      <h3>Glasbewassing
      
      </h3>
      <p>Schone ramen  geven vaak de eerk de eerste indruk van het bedrijf en zijin het visitekaartjr voor de bezoekers Om ramen ksijnen in optimale staat te houden is het erg belangrigrijjk om regelmatig  de ramen te laten  wassen <br/><br/><br/>
      
      Flexschoon werk uitsluitend met topglazenwassers. Wij zorgen woor <span>een vast gezicht.</span>   Op deze manier kun je er zeker van dat det. de glazenwasser bekend zijn met de locatie en zijn zij van elk sdetail op hoogte  voor het best haalbare resumtest .


      <span>wij garanderen dan ook  blinkende en streep loze ramen.</span> 
      </p>
      <div class="lebutton">
            
             <router-link
                        :to="{ path: '/offertes', name: 'offertesss'}"
                      > 
                  <button> Vraag een afferte aan  </button> 
                    </router-link>
      </div>
    
     </div>
   </div>
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