<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/productos"
        ><img id="logo" src="../Images/tienda_neg.png" alt="" /> My Shop Easy</a
      >
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        role="navigation"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="isLogged" class="nav-item">
            <a
              class="nav-link active"
              aria-current="true"
              @click="cerrarSesion()"
              href="/productos"
              >Cerrar Sesión</a
            >
          </li>
          <li v-if="!isLogged" class="nav-item">
            <a class="nav-link active" aria-current="true" href="/ingreso"
              >Ingresar</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" href="/registro"
              >Registrarse</a
            >
          </li>
          <li class="nav-item">
            <Modal></Modal>
          </li>
        </ul>

        <form class="d-flex menu">
          <!-- <h5>{{ usuario }}</h5> -->
          <div class="pt-1 px-3">
            <a href="/perfil"><em class="fa fa-user-circle iconos"></em></a>
          </div>
          <div class="pt-1 px-6">
            <a href="/carrito"><em class="fa fa-shopping-cart iconos"></em></a>
          </div>

          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar producto"
            aria-label="Buscar"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  // props: ["usuario", "sesion"],
  components: {
    Modal,
  },
  data: () => ({}),
  methods: {
    cerrarSesion() {
      sessionStorage.removeItem("usuario");
      sessionStorage.removeItem("tipoUsuario");
      window.location.reload();
    },
  },
  computed: {
    isLogged() {
      const usuario = sessionStorage.getItem("usuario");
      return usuario != undefined;
    },
  },
};
</script>

<style>
#logo {
  height: 50px;
}
.iconos {
  color: white;
  font-size: 25px;
}

.btn {
  color: white;
}

.menu h5 {
  color: white;
  margin-top: 5px;
}
</style>
