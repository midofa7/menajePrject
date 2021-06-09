
<template>
  <div class="mune__de_page">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand logo" href="index.html">
              
            <img src="../assets/image/logo.png"/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="" class="nav-link smoothScroll">
                                              <router-link
                        :to="{ path: '/home', name: 'home' }"
                      >home</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link smoothScroll">
                                              <router-link
                        :to="{ path: '/Facilitairschoonmaak', name: 'Facilitairschoonmaak'}"
                      >Facilitair  de schoonmaak</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">
                                              <router-link
                        :to="{ path: '/Onzewerkwijze:', name: 'Onzewerkwijze' }"
                      >Onze werkwijze:
</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link ">
                                              <router-link
                        :to="{ path: '/Contact', name: 'Contact'}"
                      >Contact</router-link>
                        </a>
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