<template>

<v-card
    max-width="450"
    class="mx-auto"
  >
    <!-- <v-toolbar
      color="cyan"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Carrito de Compras</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar> -->

    <v-list>
     <v-subheader>Carrito de Compras</v-subheader>
      <template v-for="producto in listaProductos">
        <v-list-item        
          :key="producto.id"
        >
          <v-list-item-avatar>
            <v-img :src="producto.foto"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-group>
              <v-list-item-title v-html="producto.nombre"></v-list-item-title>
              <v-list-item-subtitle v-html="producto.precio"></v-list-item-subtitle>
              <v-list-item-subtitle v-html="producto.especificacion"></v-list-item-subtitle>
            </v-list-item-group>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  export default {
   data(){
     return{
     listaProductos:[]
     }
   },
   mounted(){
     var carritoStorage = JSON.parse(localStorage.getItem('carritoCompra'));
     if(carritoStorage == null){
       carritoStorage = [];
     }
     this.listaProductos = carritoStorage;
   }
  }
</script>

<style>

</style>

