
<template>
  <div class="block2">
  <div class="team-section">
    <div class="container">
        <div class="text">
                <div class="section-heading">
                   
                    <h2>Onze diensten:</h2>
                 </div>
         </div>
         <div class="la_carosell">
           <carousel  :navText="['<', '>']"

 :loop="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
             <div class="item"><router-link
                        :to="{ path: '/seves1', name: 'seves1'}"
                      >  
                    <div class="team-item"> 
                    <img src="../assets/img/img10.png" alt="">
                    <div class="down-content">
                   
                           <h4> 	Schoonmaakonderhoud</h4>
                    </div>
                </div></router-link>
             </div>    <div class="item"><router-link
                        :to="{ path: '/seves2', name: 'seves2'}"
                      >  
                    <div class="team-item">
                    <img src="../assets/img/img11.png" alt="">
                    <div class="down-content">
                   
                            <h4>	Glasbewassing </h4>
                    </div>
                </div></router-link>
             </div>    <div class="item"> <router-link
                        :to="{ path: '/seves3', name: 'seves3'}"
                      >  
                    <div class="team-item">
                    <img src="../assets/img/img13.png" alt="">
                    <div class="down-content">
                   
                           <h4>	Vloeronderhoud </h4>
                    </div>
                </div></router-link>
             </div>    <div class="item"><router-link
                        :to="{ path: '/seves4', name: 'seves4'}"
                      >  
                    <div class="team-item">
                    <img src="../assets/img/img23.png" alt="">
                    <div class="down-content">
                   
                            <h4>	Bouwopleveringen </h4>
                    </div>
                </div></router-link>
             </div>    <div class="item"><router-link
                        :to="{ path: '/seves5', name: 'seves5'}"
                      >  
                    <div class="team-item">
                    <img src="../assets/img/img3.png" alt="">
                    <div class="down-content">
                   
                            <h4>	Dieptereiniging </h4>
                    </div>
                </div></router-link>
             </div>    <div class="item"><router-link
                        :to="{ path: '/seves6', name: 'seves16'}"
                      >   
                    <div class="team-item">
                    <img src="../assets/img/img17.png" alt="">
                    <div class="down-content">
                   
                           <h4> 	Calamiteitenservice:</h4>
                    </div>
                </div></router-link>
             </div>    
           </carousel>
         
         </div>






        
    </div>
</div>
 
  </div>
</template>

<script>



import carousel from 'vue-owl-carousel'
export default {
  name: "Home",
  components: {carousel,
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>