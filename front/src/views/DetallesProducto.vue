<template>
  <v-app>
    <div id="container">
      <div class="product-details">
        <font size="6" face="Comic Sans MS,arial,verdana"><b>{{ producto.nombre }}</b></font>

        <span class="hint-star star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>

        <br /><br />
        <!-- The most important information about the product -->
        <i class="information"
          >{{ producto.descripcion }}
        </i>

        <!-- 		Control -->
        <div class="control">
          <!-- Start Button buying -->
          <button class="btn">
            <!-- 		the Price -->
            <span class="price">{{ producto.precio }}</span>
            <!-- 		shopping cart icon-->

            <!-- 		Buy Now / ADD to Cart-->
            <span class="buy">COMPRAR YA!!</span>
          </button>
          <!-- End Button buying -->
        </div>

        <div class="control2">
          <v-subheader>Cantidad:</v-subheader>
          <v-slider
            v-model="slider"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="slider"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
        </div>
      </div>

      <!-- 	End	Product details   -->

      <!-- 	Start product image & Information -->

      <div class="product-image">
        <img
          :src="producto.foto"
        />

        <!-- 	product Information-->
        <div class="info"><p>
          <h2>DESCRIPCION</h2>
          <ul>
            <li ><strong>Tamaño: </strong>XL</li>
            <li><strong>Color: </strong>Negro</li>
            <li><strong>Marca: </strong>G2</li>
            <li><strong>Cuidados: </strong>No mojar</li>
            <li><strong>Vendedor: </strong>Benito</li>
            <li><strong>Detalles: </strong>Gamer, Ergonomica, con rueditas</li>
            <li><strong>Garantia </strong>1 Año</li>
          </ul>
        </div>
      </div>
      <!--  End product image  -->
    </div>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web");

@media only screen and (max-width: 700px) {
  #rt-main,
  #rt-header,
  .rt-container,
  .rt-container .rt-grid-8,
  .rt-container .rt-grid-8,
  .rt-container .rt-grid-9,
  .footer-container,
  .rt-container .rt-grid-3,
  .rt-container .rt-grid-6 {
    width: 99%;
  }

  body {
    min-width: 100%;
  }

  .rt-container .rt-grid-4 {
    display: none;
  }
}

body {
  background: #eeebeb;
  background-image: linear-gradient(135deg, #ffffff 10%, #000000 100%);
  background-attachment: fixed;
  background-size: cover;
}

#container {
  box-shadow: 0 15px 30px 1px rgba(0, 0, 0, 0.883);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 550px;
  width: 900px;
}

/* 	Product details  */
.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
}

/* 	Product Name */
#container .product-details h1 {
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 34px;
  color: #005eff;
  margin: 0;
}

/*Product Rating  */
.hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
}

/* The most important information about the product */
#container .product-details > p {
  font-family: "Farsan", cursive;
  text-align: center;
  font-size: 20px;
  color: #ff0000;
}

/* control */

.control {
  position: absolute;
  bottom: 25%;
  left: 6%;
}

.control2 {
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 275px;
}

/* the Button */
.buy {
  background: rgba(45, 156, 48);
  transform: translateY(1px);
  transition: 0.3s linear;
  border-radius: 55px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: rgb(255, 255, 255);
  padding: 0;
  margin: 0;
}

.price {
  background: rgba(45, 156, 48);
  transform: translateY(1px);
  transition: 0.3s linear;
  border-radius: 55px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: rgb(255, 255, 255);
  padding: 0;
  margin: 0;
}

.btn:hover {
  transform: translateY(-4px);
}

.btn span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
}
/* shopping cart icon */
.btn .price,
.shopping-cart {
  background: rgb(0, 0, 0);
  border: 0;
  margin: 0;
}

.btn .price {
  transform: translateX(-10%);
  padding-right: 15px;
}

/* buy */
.btn .buy {
  z-index: 3;
  font-weight: bolder;
}

.btn:hover .price {
  transform: translateX(-110%);
}

.btn:hover .shopping-cart {
  transform: translateX(0%);
}

/* product image  */
.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 56%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Farsan", cursive;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 2;
  text-align: left;
  font-size: 140%;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 100;
  top: 0;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  border: 1px solid rgb(206, 206, 206);
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  align-items: left;
  justify-content: left;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin: 0;
  position: relative;
}

.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: "";
  width: 0.8rem;
  height: 2px;
  background-color: #999393;
  transform: translate(-50%, -50%);
}
.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type="number"] {
  font-family: "Comic Sans MS,arial,verdana";
  max-width: 1.5rem;
  padding: 0.1em;
  border: solid rgb(179, 176, 176);
  border-width: 0 2px;
  font-size: 1rem;
  height: 1.5rem;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
import { getProductByID } from "../services/Productos.Service";

export default {
  data() {
    return {
      min: 0,
      max: 100,
      slider: 100,
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
  methods: {
    aumentarCantidad() {
      var e,
        t = parseInt(document.getElementById("cantidadProductosSlider").value);
      e = t;
      var cantidad = document.getElementById("cantidadProductos");
      cantidad.value = e;
    },
  },
  mounted() {   
    const id = 1;
    getProductByID(id)
      .then((response) => {
        this.producto = response;
      })
      .catch((error) => console.error(error));
  },
};
</script>
