
<template>
  <div class="mune__de_page">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand logo" href="">
              
            <img src="../assets/image/logo.png"/>
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
                        home
                        </a></router-link>
                    </li>
                    <li class="nav-item">
                                              <router-link
                        :to="{ path: '/Facilitairschoonmaak', name: 'Facilitairschoonmaak'}"
                      >  <a href="" class="nav-link smoothScroll">
                      Facilitair  de schoonmaak</a></router-link>
                        
                    </li>
                    <li class="nav-item">
                                               <router-link
                        :to="{ path: '/Onzewerkwijze:', name: 'Onzewerkwijze' }"
                      >  <a href="" class="nav-link">
                     Onze werkwijze:  </a>
</router-link>
                      
                    </li>
                    <li class="nav-item">
                                               <router-link
                        :to="{ path: '/Contact', name: 'Contact'}"
                      >   <a href="" class="nav-link ">
                    Contact </a>
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