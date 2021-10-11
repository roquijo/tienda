<template>
  <div class="container mt-3">
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{ usuario }}</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted font-size-sm">
                    Bay Area, San Francisco, CA
                  </p>
                  <button class="btn btn-primary mr-2">Seguir</button>
                  <button class="btn btn-outline-primary">Mensaje</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body col-md-12">
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Nombre Completo</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    v-model="nombreCompleto"
                    placeholder="Alias"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Correo</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    v-model="correo"
                    placeholder="example@exam.com"
                  />
                </div>
              </div>
              <!-- <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Teléfono</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="00-00-000"
                  />
                </div>
              </div> -->
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Celular</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    v-model="celular"
                    placeholder="000-000-0000"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Dirección</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    v-model="direccion"
                    placeholder="Cl 0 #0-0"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9 text-secondary">
                  <button class="btn btn-primary px-4"
                  @click="actualizar()"
                  >Guardar Cambios</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>

import { getUsuario, updateUsuario } from "../../src/services/Usuario.Service";
import ConfirMensaje from "../../src/components/ConfirMensaje.vue";
import MensajeError from "../../src/components/MensajeError.vue";

export default {
  components: {
    ConfirMensaje,
    MensajeError,
  },
  data() {
    return {
      title: String,
      nombre: String,
      apellido: String,
      usuario: String,
      correo: String,
      celular: Number,
      direccion: String,
      nombreCompleto: String,
    };
  },
  mounted() {
    const id = sessionStorage.getItem("id");
    if (id != undefined) {
      getUsuario(id)
        .then((response) => {
          const usuario = response.data;
          this.id = usuario.id;
          this.nombre = usuario.nombre;
          this.apellido = usuario.apellido;
          this.usuario = usuario.usuario;
          this.correo = usuario.correo;
          this.celular = usuario.celular;
          this.direccion = usuario.direccion;
          this.nombreCompleto = usuario.nombre + " " + usuario.apellido;
        })
        .catch(() => this.abrirError("Datos no encontrados"));
    }
  },
  methods: {
    actualizar() {
      if (
        this.id == undefined ||
        this.id == "" ||
        this.nombre == undefined ||
        this.nombre == ""
      ) {
        this.abrirError("Ingrese los campos requeridos");
        return;
      }
      const usuario = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        usuario: this.usuario,
        correo: this.correo,
        celular: this.celular,
        direccion: this.direccion,
      };
      updateUsuario(this.id, usuario)
        .then(() =>
          this.abrirMensaje("Se ha actualizado el Usuario: " + this.id)
        )
        .catch(() => this.abrirError("Error al actualizar el Usuario"));
    },
    abrirMensaje(mensaje) {
      this.ConfirMensaje = mensaje;
      this.ConfirShow = true;
    },
    cerrarMensaje() {
      this.ConfirShow = false;
      this.$router.push("/perfil");
    },
    abrirError(mensaje) {
      this.MensajeError = mensaje;
      this.ErrorShow = true;
    },
    cerrarError() {
      this.ErrorShow = false;
    },
    reset() {
      this.$refs.form.reset();
    },
    cancelar() {
      this.$router.push("/perfil");
    }
  },
};
</script>
<style></style>
