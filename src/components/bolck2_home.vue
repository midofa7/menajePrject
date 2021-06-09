
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
           <carousel :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}">
             <div class="item">
                    <div class="team-item">
                    <img src="../assets/image/img7.png" alt="">
                    <div class="down-content">
                   
                         <router-link
                        :to="{ path: '/seves1', name: 'seves1'}"
                      >     <h4> 1.	Schoonmaakonderhoud</h4></router-link>
                    </div>
                </div>
             </div>    <div class="item">
                    <div class="team-item">
                    <img src="../assets/image/img9.png" alt="">
                    <div class="down-content">
                   
                         <router-link
                        :to="{ path: '/seves2', name: 'seves2'}"
                      >     <h4>2.	Glasbewassing </h4></router-link>
                    </div>
                </div>
             </div>    <div class="item">
                    <div class="team-item">
                    <img src="../assets/image/img12.png" alt="">
                    <div class="down-content">
                   
                         <router-link
                        :to="{ path: '/seves3', name: 'seves3'}"
                      >     <h4>3.	Vloeronderhoud </h4></router-link>
                    </div>
                </div>
             </div>    <div class="item">
                    <div class="team-item">
                    <img src="../assets/image/img14.png" alt="">
                    <div class="down-content">
                   
                         <router-link
                        :to="{ path: '/seves4', name: 'seves4'}"
                      >     <h4>4.	Bouwopleveringen </h4></router-link>
                    </div>
                </div>
             </div>    <div class="item">
                    <div class="team-item">
                    <img src="../assets/image/img16.png" alt="">
                    <div class="down-content">
                   
                         <router-link
                        :to="{ path: '/seves5', name: 'seves5'}"
                      >     <h4>5.	Dieptereiniging </h4></router-link>
                    </div>
                </div>
             </div>    <div class="item">
                    <div class="team-item">
                    <img src="../assets/image/img18.png" alt="">
                    <div class="down-content">
                   
                         <router-link
                        :to="{ path: '/seves6', name: 'seves16'}"
                      >     <h4> 6.	Calamiteitenservice:</h4></router-link>
                    </div>
                </div>
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