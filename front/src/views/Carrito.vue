<template>
  <v-card max-width="450" class="mx-auto">
    <v-list>
      <v-subheader v-show="vacio"><h4>Carrito de Compras: VACÍO!!</h4></v-subheader>

      <v-subheader v-show="!vacio"><h5>Carrito de Compras</h5></v-subheader>

      <template v-for="producto in listaProductos">
        <v-list-item :key="producto.id">
          <v-list-item-avatar size="100">
            <v-img :src="producto.foto"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-group>
              <v-list-item-title
                v-html="'Nombre: ' + producto.nombre"
                class="my-2"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-html="'Precio: <h6>$'+ producto.precio+'</h6>'"
              ></v-list-item-subtitle>
              <v-list-item-subtitle
                v-html="'Detalles : ' + producto.especificacion"
                class="my-2"
              ></v-list-item-subtitle>
            </v-list-item-group>
            <div>
              <v-chip
                class="chipR"
                color="red"
                @click="eliminarItem(producto.id)"
              >
                <v-icon color="white"> mdi-close-circle</v-icon>
              </v-chip>
            </div>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <ConfirMensaje
      :mensaje="ConfirMensaje"
      :snackbar="ConfirShow"
      :close="cerrarMensaje"
    ></ConfirMensaje>
    <MensajeError
      :mensaje="MensajeError"
      :snackbar="ErrorShow"
      :close="cerrarError"
    ></MensajeError>
  </v-card>
</template>

<script>
import ConfirMensaje from "../../src/components/ConfirMensaje.vue";
import MensajeError from "../../src/components/MensajeError.vue";
export default {
  components: {
    ConfirMensaje,
    MensajeError,
  },
  props: ["usuario", "sesion"],
  data() {
    return {
      ConfirMensaje: "",
      ConfirShow: false,
      MensajeError: "",
      ErrorShow: false,
      vacio: false,
      listaProductos: [],
    };
  },
  mounted() {
    var carritoStorage = JSON.parse(localStorage.getItem("carritoCompra"));
    if (carritoStorage == null || carritoStorage == "") {
      carritoStorage = [];
      this.vacio = true;
    }
    this.listaProductos = carritoStorage;
  },
  methods: {
    eliminarItem(id) {
      if (id == undefined) {
        this.abrirError("Error al eliminar el producto");
      }
      var carrito = localStorage.getItem("carritoCompra");
      var arr = JSON.parse(carrito);
      arr = arr.filter((item) => item.id !== id);
      localStorage.setItem("carritoCompra", JSON.stringify(arr));
      this.abrirMensaje("Se ha elimidado el producto");
      this.listaProductos = this.listaProductos.filter((item) => item.id != id);
    },
    abrirMensaje(mensaje) {
      this.ConfirMensaje = mensaje;
      this.ConfirShow = true;
    },
    cerrarMensaje() {
      this.ConfirShow = false;
      if (this.listaProductos=="") {
        this.vacio = true
      }
    },
    abrirError(mensaje) {
      this.MensajeError = mensaje;
      this.ErrorShow = true;
    },
    cerrarError() {
      this.ErrorShow = false;
    },
  },
};
</script>

<style>
.chipR {
  bottom: 70px;
  float: right;
  position: absolute;
  right: 10%;
}
</style>
