<template>
  <v-form method="post" action="/Ingreso" ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-card elevation="15">
        <v-row class="mt-4 mx-auto">
          <legend class="mb-3 mt-5">
            <h2>Registro Nuevo Usuario</h2>
          </legend>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="name"
              append-icon="mdi-form-textbox"
              :counter="40"
              :rules="nameRules"
              label="Nombres"
              placeholder="Ingrese nombres"
              filled
              required
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              append-icon="mdi-form-textbox"
              :counter="40"
              :rules="lastnameRules"
              label="Apellidos"
              placeholder="Ingrese appellidos"
              filled
              required
            ></v-text-field>
            <v-text-field
              v-model="nickname"
              append-icon="mdi-account"
              :rules="nicknameRules"
              label="Nickname"
              placeholder="Ingrese un nickname"
              filled
              required
            ></v-text-field>
            <v-checkbox
              class="mt-0 px-3"
              v-model="checkbox"
              :rules="[(v) => !!v || 'Aceptar para continuar!']"
              label="Acepta terminos y condiciones"
              required
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="email"
              append-icon="mdi-email"
              :rules="emailRules"
              label="E-mail"
              placeholder="Ingrese un correo"
              filled
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required1, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Contraseña"
              hint="Ingrese al menos 8 caracteres"
              class="input-group--focused"
              counter
              @click:append="show1 = !show1"
              filled
            ></v-text-field>
            <v-text-field
              v-model="confirPass"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required2, rules.min, passConfirmation()]"
              :type="show1 ? 'text' : 'password'"
              name="confirpass"
              label="Confirme Contraseña"
              hint="Ingrese al menos 8 caracteres"
              class="input-group--focused"
              counter
              @click:append="show1 = !show1"
              filled
            ></v-text-field>
            <div class="text-right">
              <v-card-text class="mb-0">Ya tiene cuenta? <a href="/Ingreso">Ingrese</a>.</v-card-text>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-auto justify-center">
          <v-col cols="12" sm="6" md="2">
            <v-btn
              :disabled="!valid"
              type="submit"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Confirmar
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-btn color="error" class="mx-3" @click="reset">
              Limpiar
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-btn color="warning" @click="resetValidation">
              Limpiar Validación
            </v-btn>
          </v-col></v-row
        >
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Nombre es requerido",
      (v) => (v && v.length <= 40) || "Nombre debe ser menor que 40 caractares",
    ],
    lastname: "",
    lastnameRules: [
      (v) => !!v || "Apellido es requerido",
      (v) =>
        (v && v.length <= 40) || "Apellido debe ser menor que 40 caractares",
    ],
    nickname: "",
    nicknameRules: [(v) => !!v || "Nickname es requerido"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
    show1: false,
    password: "",
    confirPass: "",
    rules: {
      required1: (value) => !!value || "Requerido.",
      required2: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    passConfirmation() {
      return () =>
        this.password === this.confirPass || "Las contraseñas deben coincidir";
    },
  },
};
</script>

<style></style>
