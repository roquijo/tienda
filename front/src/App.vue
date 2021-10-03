<template>
  <!-- Aquí aparecen los compones en la app -->
  <v-app>
    <!-- Aquí se muestra el Nav Bar -->
    <Navbar></Navbar>
    <!-- Auí está el contenido principal -->
    <v-main>
      <!-- Aquí se muestran las vistas -->
      <router-view />
    </v-main>
    <!-- Aquí se añade el pie de página -->
    <v-footer color="grey lighten-1" padless>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  data: () => ({
    
    //
  }),
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
