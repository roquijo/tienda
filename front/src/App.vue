<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer class="grey lighten-1" app>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
      Navbar,
      Footer
    },
};
</script>