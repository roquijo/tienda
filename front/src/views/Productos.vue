<template>
  <v-container>
    <h1 class="h1">Productos</h1>
    <v-row>
      <v-col col-md-3 col-sm-6 v-for="producto in productos" :key="producto.id">
        <div class="product-grid">
          <div class="product-image">
            <a href="#">
              <img class="pic-1" :src="producto.foto" alt="" />
            </a>
            <ul class="social">
              <li class="esp">
                <a href="/detalles" data-tip="Especificaciones"
                  ><em class="fa fa-search"></em
                ></a>
              </li>
              <li class="add">
                <a href="" data-tip="Añadir a la lista de deseos"
                  ><em class="fa fa-shopping-bag"></em
                ></a>
              </li>
              <li class="buy">
                <a href="" data-tip="Añadir al carrito"
                  ><em class="fa fa-shopping-cart"></em
                ></a>
              </li>
            </ul>
            <span class="product-new-label">Sale</span>
            <span class="product-discount-label">20%</span>
          </div>
          <div class="product-content">
            <h3 class="title">
              <a href="#">{{ producto.nombre }}</a>
            </h3>
            <div class="price">${{ producto.precio }}</div>
            <a class="add-to-cart" href="">+ Añadir al Carro</a>
          </div>
          <div class="my-2">
            <v-btn class="mx-2">Editar</v-btn>
            <v-btn class="mx-2">Eliminar</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-btn
      id="addButton"
      color="primary"
      dark
      absolute
      right
      fab
      to="/productonuevo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { getAllProductos } from "../services/Productos.Service";
export default {
  data() {
    return {
      productos: [],
      producto: {
        id: this.id,
        nombre: this.nombre,
        precio: this.precio,
        foto: this.foto,
        especificacion: this.especificacion,
      },
    };
  },
  methods: {},
  mounted() {
    getAllProductos()
      .then((response) => {
        this.productos = response.data;
        console.log(response.data)
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
h1.h1 {
  text-align: center;
  margin: 1em;
  text-transform: capitalize;
}

/********************* shopping Demo-1 **********************/
img {
  height: 130px !important;
  width: 120px !important;
}

.product-grid {
  font-family: Raleway, sans-serif;
  text-align: center;
  margin: auto;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  height: 280px !important;
  width: 250px !important;
  z-index: 1;
}

.product-grid .product-image {
  position: relative;
  transition: all 0.3s ease 0s;
}

.product-grid .product-image a {
  display: block;
}

.product-grid .product-image img {
  width: 100%;
  height: auto;
}

.product-grid .pic-1 {
  opacity: 1;
  transition: all 0.3s ease-out 0s;
}

.product-grid:hover .pic-1 {
  opacity: 1;
}

.product-grid .pic-2 {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-out 0s;
}

.product-grid:hover .pic-2 {
  opacity: 1;
}

.product-grid .social {
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 1;
  transition: all 0.3s ease 0s;
}

.product-grid:hover .social {
  opacity: 1;
  top: 50%;
}

.product-grid .social li {
  display: inline-block;
}

.product-grid .social li a {
  color: #fff;
  background-color: #333;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  height: 40px;
  width: 40px;
  margin: 0 2px;
  display: block;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.product-grid .social li.esp a:hover {
  color: #fff;
  background-color: #068626;
}

.product-grid .social li.add a:hover {
  color: #fff;
  background-color: #c4a20b;
}

.product-grid .social li.buy a:hover {
  color: #fff;
  background-color: #cf2e11;
}

.product-grid .social li a:after,
.product-grid .social li a:before {
  content: attr(data-tip);
  color: #fff;
  background-color: rgb(0, 0, 0);
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  padding: 1px 5px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -30px;
}

.product-grid .social li a:after {
  content: "Holaaaaa";
  height: 15px;
  width: 15px;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -20px;
  z-index: -1;
}

.product-grid .social li a:hover:after,
.product-grid .social li a:hover:before {
  opacity: 1;
}

.product-grid .product-discount-label,
.product-grid .product-new-label {
  color: #fff;
  background-color: #be3535;
  font-size: 12px;
  text-transform: uppercase;
  padding: 2px 7px;
  display: block;
  position: absolute;
  top: 10px;
  left: 0;
}

.product-grid .product-discount-label {
  background-color: #333;
  left: auto;
  right: 0;
}

.product-grid .rating {
  color: #ffd200;
  font-size: 12px;
  padding: 12px 0 0;
  margin: 0;
  list-style: none;
  position: relative;
  z-index: -1;
}

.product-grid .rating li.disable {
  color: rgba(0, 0, 0, 0.2);
}

.product-grid .product-content {
  background-color: rgb(212, 212, 212);
  text-align: center;
  padding: 32px 0;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -27px;
  z-index: 1;
  transition: all 0.3s;
}

.product-grid:hover .product-content {
  bottom: 0;
}

.product-grid .title {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  margin: 0 0 10px;
  transition: all 0.3s ease 0s;
}

.product-grid .title a {
  color: #828282;
}

.product-grid .title a:hover,
.product-grid:hover .title a {
  color: #04942f;
}

.product-grid .price {
  color: #333;
  font-size: 17px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  letter-spacing: 0.6px;
  margin-bottom: 8px;
  text-align: center;
  transition: all 0.3s;
}

.product-grid .price span {
  color: #999;
  font-size: 13px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 3px;
  display: inline-block;
}

.product-grid .add-to-cart {
  color: #000;
  font-size: 13px;
  font-weight: 600;
}

@media only screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 30px;
  }
}
</style>
