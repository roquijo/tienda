<template>
  <v-app> 
    <Navbar></Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
  export default {
    components:{
      Navbar,
    },
  }
</script>