
<template>
<div class="page_dety_serves ">

      <div class="home vue__de__site">
<div class="munedepage"><munedepage/></div>
    <div class="container">
        <div class="tetel">
            <h3>	Bouwopleveringen </h3>
        </div>
        <div class="block_sev">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="image"> <img src="../assets/img/img7.png" /></div>
            </div>
            <div class="col-12 col-md-6">
                <div class="text">
                    <p>Het opleveren van bouwprojecten is vaak een stressvolle taak, omdat dit meestal kort van te voren aangegeven wordt en je weinig tijd hebt om de klus af te ronden. Voor dit soort gevallen is het prettig om een <span> vaste samenwerkingspartner </span> in te kunnen schakelen. Flexschoon heeft ruime ervaring op het gebied van bouwopleveringen. Onze medewerkers zijn bekwaam en draaien hun handen niet om voor een pittige klus, maar zien dit eerder als een uitdaging. Wij kunnen op aanvraag de <span> gehele bouwoplevering voor je uit handen nemen.</span>

In de meeste gevallen bestaat een bouwoplevering uit het <span> schoonmaken tijdens de bouw </span> zodat de medewerkers hun werk optimaal uit kunnen voeren en daarnaast het opleveren van het project nadat het project afgerond is. In beide gevallen zijn wij u graag van dienst.<span> Wij werken altijd volgens richtlijnen en wetten op het gebied van veiligheid en milieu </span> om de veiligheid van jou en onze medewerkers te kunnen waarborgen.



Wij zijn bekend met de tijdsdruk die een bouwoplevering kan geven. Onze medewerkers zijn <span>vakbekwaam en erg flexibel. </span> Samen zorgen wij ervoor dat er geen kink in de kabel komt zodat je <span>zorgeloos </span>je deadline kunt behalen.

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
</div>
</div>
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