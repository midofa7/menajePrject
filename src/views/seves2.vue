
<template>
<div class="page_dety_serves ">

      <div class="home vue__de__site">
<div class="munedepage"><munedepage/></div>
    <div class="container">
        <div class="tetel">
            <h3>	Glasbewassing</h3>
        </div>
        <div class="block_sev">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="image"> <img src="../assets/image/img11.png" /></div>
            </div>
            <div class="col-12 col-md-6">
                <div class="text">
                    <p>
Schone ramen geven vaak de eerste indruk van het bedrijf en zijn het visitekaartje voor de bezoekers. Om ramen en kozijnen in optimale staat te houden is het erg belangrijk om regelmatig de ramen te laten wassen.
Flexschoon werkt uitsluitend met topglazenwassers. Wij zorgen voor<span> een vast gezicht. </span>Op deze manier kun je er zeker van zijn dat de glazenwassers bekend zijn met de locatie en zijn zij van elk detail op de hoogte voor het best haalbare resultaat.<span> Wij garanderen dan ook blinkende en streep loze ramen.</span>

</p>
                </div>
            </div>
        </div>
        </div>   
          <div class="block__bottne">
    
             <router-link
                        :to="{ path: '/offertes', name: 'offertess'}"
                      > 
                  <button>  Offerte aanvragen </button> 
                    </router-link>
      
        </div></div> 
    </div>

</div>
</template>

<script>
import munedepage from "../components/munepage";

export default {
  name: "Home",
  components: {
      munedepage,
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>