import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import home from '../views/home.vue'
import  Facilitairschoonmaak from '../views/Facilitairschoonmaak.vue'
import WieZijnWij from '../views/WieZijnWij.vue'
import Contact  from '../views/Contact.vue'
import seves1  from '../views/seves1.vue'
import seves2  from '../views/seves2.vue'
import seves3  from '../views/seves3.vue'
import seves4  from '../views/seves4.vue'
import seves5  from '../views/seves5.vue'
import seves6  from '../views/seves6.vue'

const routes = [
  {
    path: '/seves1',
    name: 'seves1',
    component:seves1 ,  
  }, {
    path: '/seves2',
    name: 'seves2',
    component:seves2 ,  
  }, {
    path: '/seves3',
    name: 'seves3',
    component:seves3 ,  
  }, {
    path: '/seves4',
    name: 'seves4',
    component:seves4 ,  
  }, {
    path: '/seves5',
    name: 'seves5',
    component:seves5 ,  
  }, {
    path: '/seves6',
    name: 'seves6',
    component:seves6 ,  
  },  {
    path: '',
    name: '',
    component:home ,  
  },  {
    path: '/home',
    name: 'home',
    component: home,  
  },  {
    path: '/Facilitairschoonmaak',
    name: 'Facilitairschoonmaak',
    component: Facilitairschoonmaak ,  
  },  {
    path: '/Onzewerkwijze',
    name: 'Onzewerkwijze',
    component: WieZijnWij ,  
  },  {
    path: '/Contact',
    name: 'Contact',
    component: Contact ,  
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
