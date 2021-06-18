
<template>
  <div class="footer">
   <div class="">
     <div class="block__top" >
     
      <div class="image">
         <img src="../assets/img/logo.png"/>
      </div>
      <div class="text_block">
          <p>Website: <span>www.flexschoon.nl</span></p>
          <p>Email:<span> info@flexschoon.nl </span></p>
          <p>Telefoonnummer:<span> 06 87 52 4936</span></p>

          

   <router-link
                        :to="{ path: '/Cookies', name: 'Cookies'}"
                      >   <a href="" class="nav-link ">
                    Cookies </a>
                    </router-link>


      
      </div>
      </div>
     
     </div>
    <div class="block_bottn">
    <p>-– © flexschoon 2021/2020</p>
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