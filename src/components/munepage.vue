
<template>
  <div class="mune__de_page ">
    <nav class="navbar navbar-expand-lg">
        <div class="">
            <a class="navbar-brand logo" href="">
     
                                            <router-link
                        :to="{ path: '/home', name: 'home' }"
                      >  
            <img src="../assets/img/logo2.png"/>
                        </router-link>
            </a>

            <button class="navbar-toggler"  id="muneshowMobil" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                                            <router-link
                        :to="{ path: '/home', name: 'home' }"
                      >  <a href="" class="nav-link smoothScroll">
                       HOME 
                        </a></router-link>
                    </li>
                    <li class="nav-item">
                                              <router-link
                        :to="{ path: '/Facilitairschoonmaak', name: 'Facilitairschoonmaak'}"
                      >  <a href="" class="nav-link smoothScroll">
                      FACILITAIR DE SCHOONMAAK </a></router-link>
                        
                    </li>
                    <li class="nav-item">
                                               <router-link
                        :to="{ path: '/Onzewerkwijze:', name: 'Onzewerkwijze' }"
                      >  <a href="" class="nav-link">
                     ONZE WERKWIJZE  </a>
</router-link>
                      
                    </li>
                    <li class="nav-item">
                                               <router-link
                        :to="{ path: '/Contact', name: 'Contact'}"
                      >   <a href="" class="nav-link ">
                    CONTACT </a>
                    </router-link>
                       
                    </li>   <li class="nav-item">
                                               <router-link
                        :to="{ path: '/Vacatures', name: 'Vacatures'}"
                      >   <a href="" class="nav-link ">
                    VACATURES </a>
                    </router-link>
                       
                    </li>
                    <li class="nav-item">
                                               <router-link
                        :to="{ path: '/offertes', name: 'offertes'}"
                      >   <a href="" class="nav-link ">
                  offertes</a>
                    </router-link>
                       
                    </li>   <li class="nav-item">
                                               <router-link
                        :to="{ path: '/Vacatures', name: 'Vacatures'}"
                      >   <a href="" class="nav-link ">
                   <i class="fas fa-award"></i> </a>
                    </router-link>
                       
                    </li>
                </ul>
            </div>
        </div>
    </nav>





    
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