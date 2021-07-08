
<template>
<div class="page_dety_serves ">

      <div class="home vue__de__site">
<div class="munedepage"><munedepage/></div>
    <div class="container">
        <div class="tetel">
            <h3>Vloeronderhoud</h3>
        </div>
        <div class="block_sev">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="image"> <img src="../assets/img/img12.png"/></div>
            </div>
            <div class="col-12 col-md-6">
                <div class="text">
                    <p>Vloeren worden normaliter veel gebruikt. Om de levensduur van de vloer te verlengen, is het van belang om deze regelmatig te laten onderhouden. Daarnaast kunnen verschillende factoren zoals vocht, vuil of zand ervoor zorgen dat vloeren veel sneller slijten. Periodiek de vloeren laten behandelen gaat dit tegen. 


Onze specialisten zijn vakmensen met bakken ervaring. Elke vloer heeft een aparte behandeling nodig. Wij hebben medewerkers die <span> gespecialiseerd zijn in het reinigen en onderhouden van verschillende soorten vloeren.</span> Omdat wij het milieu erg belangrijk vinden, werken wij uitsluitend met <span> milieuvriendelijke schoonmaakproducten. </span>

                    
</p>
                </div>
            </div>
        </div>
        </div>    
          <div class="block__bottne">
    
             <router-link
                        :to="{ path: '/offertes', name: 'offertesss'}"
                      > 
                  <button>Offerte aanvragen</button> 
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
      munedepage,
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>