<template>
  <div>
    <v-card flat color="blue">
      <v-subheader>Prueba</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="value"
          :rules="rules"
          label="How many?"
          step="10"
          thumb-label="always"
          ticks
        ></v-slider>
      </v-card-text>
    </v-card>
    <form class="form-horizontal needs-validation" onsubmit="verificarPasswords(); return false" action="#"
            method="post">
            <v-fieldset>
                <!-- Contenedor -->
                <div class="container mt-4">
                    <!-- Filas -->
                    <div class="row">
                        <!-- Título-->
                        <legend class="mb-3">
                            <h2>Registro Nuevo Usuario</h2>
                        </legend>
                        <!-- Columnas -->
                        <div class="col-md-5">
                            <!-- Nombres-->
                            <div class="mb-3 form-group">
                                <label class="col-md-8 form-label mb-3" for="Name">Nombre</label>
                                <input id="Name" name="Name" type="text" placeholder="Ingrese Nombres"
                                    class="form-control input-md" required="">
                                <div class="valid-feedback">
                                    Se ve bien!
                                </div>
                                <div class="invalid-feedback">
                                    Ingrese un nombre.
                                </div>
                            </div>
                            <!-- Apellidos-->
                            <div class="mb-3 form-group">
                                <label class="col-md-8 control-label form-label mb-3" for="Lastname">Apellido</label>
                                <input id="Lastname" name="Lastname" type="text" placeholder="Ingrese Apellidos"
                                    class="form-control input-md" required="">
                                <div class="valid-feedback">
                                    Se ve bien!
                                </div>
                                <div class="invalid-feedback">
                                    Ingrese un apellido.
                                </div>
                            </div>
                            <!-- Nombre Usuario-->
                            <div class="mb-3 form-group">
                                <label class="col-md-8 control-label form-label mb-3" for="nickname">Nombre
                                    Usuario</label>
                                <input id="nickname" name="nickname" type="text" placeholder="Ingrese Nombre Usuario"
                                    class="form-control input-md" required="">
                                <div class="valid-feedback">
                                    Se ve bien!
                                </div>
                                <div class="invalid-feedback">
                                    Ingrese un nombre de usuario.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <!-- Bloque separador -->
                        </div>
                        <div class="col-md-5">
                            <!-- Correo-->
                            <div class="mb-3 form-group">
                                <label class="col-md-8 control-label form-label mb-3" for="email">Correo</label>
                                <input type="email" class="form-control input-md" id="email" name="email"
                                    placeholder="name@example.com" required="">
                                <div class="invalid-feedback">
                                    Ingrese un correo válido.
                                </div>
                            </div>
                            <!-- Contraseña-->
                            <div class="mb-3 form-group">
                                <label class="col-md-8 control-label form-label mb-3" for="password">Contraseña</label>
                                <input id="password" name="password" type="password" minlength="8"
                                    placeholder="8 a 16 caracteres como mínimo" class="form-control input-md"
                                    required="">
                                <div class="invalid-feedback">
                                    Ingrese una contraseña.
                                </div>
                            </div>
                            <!-- Confirmación Contraseña-->
                            <div class="mb-3 form-group">
                                <label class="col-md-8 control-label form-label mb-3" for="passwordConf">Confirme
                                    contraseña</label>
                                <input id="passwordConf" name="passwordConf" type="password" minlength="8"
                                    placeholder="8 a 16 caracteres como mínimo" class="form-control input-md"
                                    required="">
                                <div class="invalid-feedback">
                                    Repita la contraseña.
                                </div>
                            </div>
                        </div>
                        <!-- Botones - Confirmar y limpiar -->
                        <div class="col-md-12 form-group text-center">
                            <div>
                                <label class="col-md-4 control-label mb-3 form-label">
                                    <h3>Registro</h3>
                                </label>
                            </div>
                            <div class="row justify-content-md-center">
                                <div class="col-2">
                                    <button type="submit" id="signUp" name="submit"
                                        class="btn btn-dark">Confirmar</button>
                                </div>
                                <div class="col-2"><button type="reset" name="reset" class="btn btn-secondary">Limpiar</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-fieldset>
        </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 90,
      slider: 40,
    };
  },
};
</script>

<style></style>
