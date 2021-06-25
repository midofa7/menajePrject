
<template>
  <div class="pagep_setaple-sanpel">
 
<div class="block_taepe--de-page">
                

                <h2>Facilitair in de schoonmaak</h2>
</div>
 <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="left-image">
              <img src="../assets/img/img7.png" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="right-content">
              <div class="section-heading">
                
                <h2>Facilitair in de schoonmaak</h2>
                <p>
Schoonmaak en communicatie zijn voor ons de belangrijkste factoren voor een goede dienstverlening. Wij selecteren de schoonmaker met uiterste zorg. Wij zijn gespecialiseerd in de schoonmaak van kantoorgebouwen, VVE’s en scholen. Omdat wij veel waarde hechten aan goede communicatie en een vertrouwensband, zorgen wij dat je altijd een vast aanspreekpunt hebt. Schroom niet om ons te contacteren. Wij maken graag een vrijblijvende offerte voor jou.
</p>
              </div>
                </div>
          </div>
        </div>
      </div>
    </div>
     <div class="block__bottne">
    
             <router-link
                        :to="{ path: '/offertes', name: 'offertes'}"
                      > 
                  <button> Offerte aanvragen </button> 
                    </router-link>
      
        </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>