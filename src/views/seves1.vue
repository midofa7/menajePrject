
<template>
<div class="page_dety_serves ">

      <div class="home vue__de__site">
<div class="munedepage"><munedepage/></div>
    <div class="container">
        <div class="tetel">
            <h3>	Schoonmaakonderhoud </h3>
        </div>
        <div class="block_sev">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="image"> <img src="../assets/image/img7.png" /></div>
            </div>
            <div class="col-12 col-md-6">
                <div class="text">
                    <p>Wij bieden schoonmaak op maat. Met jaren aan ervaring hebben wij medewerkers in huis die opgeleid zijn voor
                    <span> zowel specialistische reiniging als dagelijkse schoonmaak.</span>  Onze medewerkers zijn zowel klantgericht als proactief. Mocht het de medewerker opvallen dat er extra of andersoortige schoonmaak nodig is dan nemen wij hierover direct contact met je op.
                    
Wij vinden het belangrijk om je zo goed mogelijk te bedienen. Vooraf bespreken wij de mogelijkheden en leggen wij je wensen vast zodat je altijd weet waar je aan toe bent. 
Daarnaast maken wij voor al onze schoonmaakhandelingen gebruik van de meest<span > moderne en milieuvriendelijke middelen en technieken.</span>
<br>
Wij als dienstverlener in de schoonmaak helpen je graag de locatie schoon te houden zodat je zo <span>onbezorgd</span>  mogelijk je werkzaamheden kunt blijven verrichten op een schone locatie. Wij ontzorgen je graag.

                    </p>
            
                </div>
            </div>
        </div>
        </div>     

        <div class="block__bottne">
    
             <router-link
                        :to="{ path: '/offertes', name: 'offertes'}"
                      > 
                  <button>   Offerte aanvragen  </button> 
                    </router-link>
      </div>
        </div>
    </div>

</div>
</template>

<script>


import munedepage from "../components/munepage";
export default {
  name: "Home",
  components: {
 munedepage
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>