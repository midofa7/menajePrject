
<template>
<div class="page_dety_serves ">

      <div class="home vue__de__site">
<div class="munedepage"><munedepage/></div>
    <div class="container">
        <div class="tetel">
            <h3>	Calamiteitenservice: </h3>
        </div>
        <div class="block_sev">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="image"> <img src="../assets/img/img15.png" /></div>
            </div>
            <div class="col-12 col-md-6">
                <div class="text">
                    <p>
Het kan voorkomen dat er een <span>dringende reden </span> is voor een specialistische schoonmaak. Wij zijn in het geval van calamiteiten <span> 24/7 beschikbaar.</span> Bij water, storm of brandschade kun je altijd contact met ons opnemen en zijn wij altijd bereikbaar. Zo kun je er gerust op zijn dat wij altijd een team paraat hebben staan om te <span> helpen en ontzorgen</span>.
</p>
                </div>
            </div>
        </div>
        </div>   
          <div class="block__bottne">
    
             <router-link
                        :to="{ path: '/offertes', name: 'offertes'}"
                      > 
                  <button>   Offerte aanvragen </button> 
                    </router-link>
      
        </div>
         </div>

</div></div>
</template>

<script>


import munedepage from "../components/munepage";

export default {
  name: "Home",
  components: {munedepage,
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>