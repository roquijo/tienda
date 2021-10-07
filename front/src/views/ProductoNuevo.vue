<template>
  <v-container>
    <v-card elevation="15" width="50%" class="mx-auto">
      <v-row class="ma-auto">
        <v-col cols="12" sm="12" md="12">
          <v-form class="mx-auto">
            <ConfirMensaje
              :mensaje="ConfirMensaje"
              :snackbar="ConfirShow"
            ></ConfirMensaje>
            <v-text-field
              v-model="nombre"
              label="Producto nuevo"
              placeholder="Ingrese el nombre del producto"
              required
              filled
              dense
            ></v-text-field>
            <v-text-field
              v-model="id"
              label="Código"
              placeholder="Ingrese el código"
              filled
              dense
              required
            ></v-text-field>
            <v-text-field
              v-model="precio"
              label="Precio"
              placeholder="Ingrese el precio"
              filled
              dense
              required
            ></v-text-field>
            <v-file-input
              v-show="!show"
              label="Subir archivo"
              prepend-icon="mdi-upload"
              append-outer-icon="mdi-paperclip"
              v-model="foto"
              filled
              show-size
              dense
              truncate-length="15"
              @click:append-outer="show = !show"
            ></v-file-input>
            <v-text-field
              v-show="show"
              prepend-icon="mdi-paperclip"
              append-outer-icon="mdi-upload"
              v-model="foto"
              label="URL Imagen"
              placeholder="Ingrese la URL"
              filled
              required
              dense
              autofocus
              @click:append-outer="show = !show"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="especificacion"
              label="Descripción"
              placeholder="Ingrese descripción breve"
              filled
              dense
            ></v-text-field>
            <div class="text-center mt-4">
              <v-btn color="primary" class="mr-5" @click="guardar()">
                Enviar
              </v-btn>
              <v-btn type="reset" color="secondary" class="ml-5">
                Cancelar
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { insertProducto } from "../../src/services/Productos.Service";
import ConfirMensaje from "../../src/components/ConfirMensaje.vue";
export default {
  components: {
    ConfirMensaje,
  },
  data() {
    return {
      id: 0,
      nombre: "",
      precio: 0,
      foto:"",
      especificacion: "",
      ConfirMensaje: "",
      ConfirShow: false,
      show: false,
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
          console.log("Se agregó el producto", response.data._id);
          this.ConfirMensaje =
            "Se ha agreado el producto: " + response.data._id;
          this.ConfirShow = true;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

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
