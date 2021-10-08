<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/productos"><img id="logo" src="../Images/tienda_neg.png" alt=""> My Shop Easy</a>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        role="navigation"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
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

        
        <form class="d-flex" style="margin-top:13px;">
      <div class="pt-1 px-6">
        <a href="/carrito"
                  ><em class="fa fa-shopping-cart" id="carrito"></em
        ></a>
      </div>

          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
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
  components: {
    Modal,
  },
};
</script>

<style>
#logo {
  height: 50px;
}
#carrito{
  color: white;
  font-size: 25px;
}
</style>
