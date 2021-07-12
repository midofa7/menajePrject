
<template>
<div class="home_2_pagee">

    
      <div class="home vue__de__site">
<div class="">  <div class="munedepage"><munedepage/></div>
   <div class="">
      <div class="row">
        <div class="col-12 col-md-5">
           <div class="text_block">
             <ul>
               <li><p><img src="../assets/img/icon1.svg"/>Wij staaan voor flexibliteit in</p></li>
               <li><p><img src="../assets/img/icon1.svg"/>Maandelijks opzegbaar</p></li>
               <li><p><img src="../assets/img/icon1.svg"/>Schoonmaak van A tot z</p></li>
             </ul>
             <div class="bottn">
              <router-link
                        :to="{ path: '/offertes', name: 'offertes'}"
                      > 
                  <button>   Offerte aanvragen </button> 
                    </router-link>
             </div>
           </div>
        </div>
        <div class="col-12 col-md-7 p-0">
        <div class="right__block">
         <div class="lacaroseel">
                 <carousel 
  :autoplay = "true" 
  :nav = "true"
  :dots = "true"
  :loop = "true"
  :margin = "30"
  :autoplaySpeed = "true"
  navText="<"
  :autoplayTimeout = "5000"
  :responsive = "{
     0:{items:1},576:{items:3},780:{items:3}
  }">


  
     <div class="card">
     <router-link
                        :to="{ path: '/seves1', name: 'seves1'}"
                      > 
        <div class="item">
        <img src="../assets/img/imgg10.png"/>
        <h3>	Schoonmaak onderhoud</h3>
        </div>
        </router-link>
     </div>
     <div class="card">
     <router-link
                        :to="{ path: '/seves2', name: 'seves2'}"
                      > 
        <div class="item">
        <img src="../assets/img/imgg11.png"/>
        <h3>Glasbewassing</h3>
        </div>
        </router-link>
     </div>
     <div class="card">
     <router-link
                        :to="{ path: '/seves3', name: 'seves3'}"
                      > 
        <div class="item">
        <img src="../assets/img/imgg13.png"/>
        <h3>Vloeronderhoud</h3>
        </div>
        </router-link>
     </div>
     <div class="card">
     <router-link
                        :to="{ path: '/seves4', name: 'seves4'}"
                      > 
        <div class="item">
        <img src="../assets/img/imgg23.png"/>
        <h3>Bouwopleveringen</h3>
        </div>
        </router-link>
     </div>
     <div class="card">
     <router-link
                        :to="{ path: '/seves5', name: 'seves5'}"
                      > 
        <div class="item">
        <img src="../assets/img/imgg3.png"/>
        <h3>Dieptereiniging</h3>
        </div>
        </router-link>
     </div>
     <div class="card">
     <router-link
                        :to="{ path: '/seves6', name: 'seves6'}"
                      > 
        <div class="item">
        <img src="../assets/img/imgg17.png"/>
        <h3>Calamiteitenservice</h3>
        </div>
        </router-link>
     </div>
          </carousel> 
          </div>




<div class="block__elemmt__textbtn">
     <div class="row">
         <div class="col-12 col-md-7"><div class="textLfet">
         <h3>Calamitenservice</h3>
         </div></div>
         <div class="col-12 col-md-5 p-0"><div class="textright">
         <p class="text_contact">Direct cotact</p>
         <p><img src="../assets/img/icon22.svg"/>06 87 52 49 39</p>
         </div></div>
     </div>

</div>






        </div>
        
        
        </div>
      </div>
   
   </div>

</div>

</div>
</div>
</template>

<script>

import carousel from 'vue-owl-carousel'

import munedepage from "../components/munepage";
export default {
  name: "Home",
  components: {
      munedepage,carousel
    
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>