<template>
  <v-container>
    <v-card elevation="15" width="50%" class="mx-auto">
      <v-row class="ma-auto">
        <v-col cols="12" sm="12" md="12">
          <v-form role="form" class="mx-auto">
            <div class="form-group">
              <label for="name">Nombre del producto: </label>
              <input
                v-model="nombre"
                type="text"
                class="form-control"
                id="nombre del producto"
              />
              <label for="info">Codigo: </label>
              <input
                v-model="id"
                type="text"
                class="form-control"
                id="information"
              />
              <label for="precio">Precio: </label>
              <input
                v-model="precio"
                type="text"
                class="form-control"
                id="precio"
              />   
              <label for="foto">Foto: </label>
              <input
                v-model="foto"
                type="text"
                class="form-control"
                id="foto"
              />   
              <label for="especificacion">Especificacion: </label>
              <v-text-field
                v-model="especificacion"
                type="text"               
                id="especificacion"
              ></v-text-field>           
            </div>            
            <div class="text-center mt-4">
              <button
                type="submit"
                class="btn btn-primary mr-5"
                @click="guardar()"
              >
                Enviar
              </button>
              <button type="reset" class="btn btn-secondary ml-5">
                Cancelar
              </button>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style>
/* Estilo del área del input[file] */
.drag-drop {
  height: 8em;
  width: 8em;
  background-color: #ccc;
  border-radius: 4em;
  text-align: center;
  color: white;
  position: relative;
  margin: 0 auto 1em;
}

.drag-drop span.desc {
  display: block;
  font-size: 0.7em;
  padding: 0 0.5em;
  color: #000;
}

input[type="file"] {
  height: 10em;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}

/* Estilo del área del input[file] con :hover */

.drag-drop:hover,
input[type="file"]:hover {
  background-color: #3276b1;
  cursor: pointer;
}

.drag-drop:hover span.desc {
  color: #fff;
}

/* Composición del icono de Upload con FontAwesome */
.fa-stack {
  margin-top: 0.5em;
}

.fa-stack .top {
  color: white;
}

.fa-stack .medium {
  color: black;
  text-shadow: 0 0 0.25em #666;
}

.fa-stack .bottom {
  color: rgba(225, 225, 225, 0.75);
}

.drag-drop:hover .pulsating {
  animation: pulse1 1s linear infinite;
  animation-direction: alternate;
  -webkit-animation: pulse1 1s linear infinite;
  -webkit-animation-direction: alternate;
}

/* Keyframing de la animación */

@keyframes pulse1 {
  0% {
    color: rgba(225, 225, 225, 0.75);
  }
  50% {
    color: rgba(225, 225, 225, 0.25);
  }
  100% {
    color: rgba(225, 225, 225, 0.75);
  }
}

@-moz-keyframes pulse1 {
  0% {
    color: rgba(225, 225, 225, 0.75);
  }
  50% {
    color: rgba(225, 225, 225, 0.25);
  }
  100% {
    color: rgba(225, 225, 225, 0.75);
  }
}

@-webkit-keyframes pulse1 {
  0% {
    color: rgba(225, 225, 225, 0.75);
  }
  50% {
    color: rgba(225, 225, 225, 0.25);
  }
  100% {
    color: rgba(225, 225, 225, 0.75);
  }
}

@-ms-keyframes pulse1 {
  0% {
    color: rgba(225, 225, 225, 0.75);
  }
  50% {
    color: rgba(225, 225, 225, 0.25);
  }
  100% {
    color: rgba(225, 225, 225, 0.75);
  }
}
</style>

<script>
import { insertProducto } from "../../src/services/Productos.Service";
export default {
  data() {
    return {
      id: 0,
      nombre: "",
      precio: 0,
      foto: "",
      especificacion: "",
    };
  },
  methods: {
    guardar() {
      const producto = {
        id: this.id,
        nombre: this.nombre,
        precio: this.precio,
        foto: this.foto,
        especificacion: this.especificacion,        
      };
      insertProducto(producto)
        .then((response) => {
          console.log("Se ha agreado el producto", response.data._id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
