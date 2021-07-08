
<template>
  <div class="footer">
    
    <div class="block_bottn">
    <p>-– © flexschoon 2021/2020
   <router-link
                        :to="{ path: '/Privacyverklaring', name: 'Privacyverklaring'}"
                      >   <a href="" class="nav-link ">
                  Privacyverklaring </a>
                    </router-link>| 

   <router-link
                        :to="{ path: '/Cookies', name: 'Cookies'}"
                      >   <a href="" class="nav-link ">
             <i class="fas fa-cookie-bite"></i>       Cookies </a>
                    </router-link> | Plastsen
    </p>
    </div>   
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>