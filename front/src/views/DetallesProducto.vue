<template>
  <v-container>
    <v-btn color="success" absolute fixed fab left to="/productos">
      <v-icon>mdi-keyboard-backspace</v-icon>
    </v-btn>
    <v-card max-width="850" height="400" class="mx-auto my-6">
      <v-row class="ma-auto" align="center" align-content="center">
        <v-col cols="12" sm="6" md="6">
          <v-hover v-slot="{ hover }">
            <v-img
            v-if="!noFound"
              :aspect-ratio="4 / 3"
              height="360"
              width="100%"
              :src="producto.foto"
              class="ma-auto"
              ><v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%;"
                >
                  ${{ producto.precio }}
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-img
                v-if="noFound"
                :aspect-ratio="4 / 3"
                height="360"
                width="100%"
                src="../Images/no_image.jpg"
                class="ma-auto"
                ><v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal text-h2 white--text"
                    style="height: 100%;"
                  >
                    {{ precio }}
                  </div>
                </v-expand-transition>
              </v-img>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-card-title
            ><h1>{{ producto.nombre }}</h1>
          </v-card-title>
          <v-card-title
          v-if="noFound"
            ><h1>{{title}}</h1>
          </v-card-title>
          <v-card-text>
            <v-rating
              v-model="rating"
              background-color="grey"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="18"
            ></v-rating>
            <div class="my-4 text-subtitle-1">
              {{ producto.especificacion }}
            </div>
          </v-card-text>
          <v-card-title class="justify-center">
            <v-card-actions class="d-flex">
              <v-chip v-if="!noFound" color="success" x-large @click="reserve"
                >COMPRAR YA!! ${{ producto.precio }}
              </v-chip>
              <v-chip v-if="noFound" color="success" x-large @click="reserve"
                >COMPRAR YA!! {{ precio }}
              </v-chip>
            </v-card-actions>
          </v-card-title>
        </v-col>
      </v-row>
      <MensajeError
        :mensaje="MensajeError"
        :snackbar="ErrorShow"
        :close="cerrarError"
      ></MensajeError>
    </v-card>
  </v-container>
</template>

<script>
import { getProducto } from "../services/Productos.Service";
import MensajeError from "../../src/components/MensajeError.vue";

export default {
  components: {
    MensajeError,
  },
  data() {
    return {
      min: 0,
      max: 100,
      slider: 100,
      rating: 0,
      producto: {},
      MensajeError: "",
      ErrorShow: false,
      noFound: false,
      title: "No encontrado",
      precio: "$0.00"
    };
  },
  methods: {
    // aumentarCantidad() {
    //   var e,
    //     t = parseInt(document.getElementById("cantidadProductosSlider").value);
    //   e = t;
    //   var cantidad = document.getElementById("cantidadProductos");
    //   cantidad.value = e;
    // },
    abrirError(mensaje) {
      this.MensajeError = mensaje;
      this.ErrorShow = true;
    },
    cerrarError() {
      this.ErrorShow = false;
      this.$router.push("/productos");
    },
  },
  mounted() {
    const id = this.$route.params.id;
    if (id != undefined) {
      getProducto(id)
        .then((response) => {
          this.producto = response.data;
        })
        .catch(() => {
          this.producto = {};
          this.noFound = true;
          this.abrirError("Producto no encontrado");
        });
    } else {
      this.producto = JSON.parse(localStorage.getItem("detallesProducto"));
    }
  },
};
</script>

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

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

/* body {
  background: #eeebeb;
  background-image: linear-gradient(135deg, #ffffff 10%, #000000 100%);
  background-attachment: fixed;
  background-size: cover;
} */

/* #imagen {
  position: relative;
} */

/* #container {
  box-shadow: 0 15px 30px 1px rgba(0, 0, 0, 0.883);
  background: rgb(255, 255, 255);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px auto;
  height: 500px;
  width: 900px;
} */

/* 	Product details  */
/* .product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: right;
  width: 40%;
} */

/* 	Product Name */
/* #container .product-details h1 {
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 34px;
  color: #005eff;
  margin: 0;
} */

/*Product Rating  */
/* .hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
} */

/* The most important information about the product */
/* #container .product-details > p {
  font-family: "Farsan", cursive;
  text-align: center;
  font-size: 20px;
  color: #ff0000;
} */

/* control */

/* .control {
  position: absolute;
  bottom: 25%;
  left: 6%;
}

.control2 {
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 275px;
} */

/* the Button */
/* .buy {
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

.prices {
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
} */

/* .btnp:hover {
  transform: translateY(-4px);
  transform: scale(1.2, 1.2);
}

.btnp {
  margin-left: 35px;
}
.btnp span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
} */
/* shopping cart icon */
/* .shopping-cart, */
/* .btnp .prices {
  background: rgb(0, 0, 0);
  border: 0;
  margin: 0;
}

.btnp .prices {
  transform: translateX(-10%);
  padding-right: 15px;
} */

/* buy */
/* .btnp .buy {
  z-index: 3;
  font-weight: bolder;
} */

/* .btn:hover .prices {
  transform: translateX(-10%);
} */

/* .btn:hover .shopping-cart {
  transform: translateX(0%);
} */

/* product image  */
/* .product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 95%;
  width: 50%;
  padding-top: 50px;
} */

/* #container img {
  width: 80%;
  height: 80%;
} */

/* .info {
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
} */

/* .info h2 {
  text-align: center;
} */
/* .product-image:hover .info {
  transform: translateX(0);
} */

/* .info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
} */

/* .product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
} */

/* input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
} */

/* .number-input {
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
} */
</style>
