<template>
  <v-form
    method="post"
    action="/Perfil"
    ref="loginForm"
    v-model="valid"
    lazy-validation
  >
    <v-container>
      <v-card elevation="15" width="75%" class="mx-auto">
        <v-row class="mt-4 ma-auto" align="center" align-content="center">
          <v-col cols="12" sm="6" md="6">
            <legend class="mb-3 mt-5">
              <h2>Ingreso:</h2>
            </legend>
            <v-text-field
              v-model="email"
              append-icon="mdi-email"
              :rules="emailRules"
              label="E-mail"
              placeholder="Ingrese el correo"
              required
              filled
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="[rules.required, rules.min]"
              name="password"
              label="Contraseña"
              hint="Ingrese al menos 8 caracteres"
              counter
              @click:append="show = !show"
              filled
            ></v-text-field>
            <!-- <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Este campo es requerido']"
              label="Ingresar como:"
              required
              filled
            ></v-select> -->
            <p class="mb-0">
              No tiene cuenta? <a href="/registro">Registrese</a>.
            </p>
          </v-col>
          <v-col cols="6" sm="6" md="6">
            <v-img src="../Images/cuenta.png"></v-img>
          </v-col>
          <v-col align-self="center" cols="12" sm="12" md="10">
            <v-btn
              :disabled="!valid"
              class="mr-4"
              type="submit"
              color="primary"
              @click="validate"
            >
              Ingresar
            </v-btn>
            <v-btn @click="clear" color="#616161" dark>
              Limpiar
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,

    // select: null,
    // items: ["Administador", "Cliente"],
    
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],

    show: false,
    password: "",
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 8 || "Mínimo 8 caracteres",
    },
  }),

  methods: {
    validate() {
      this.$refs.loginForm.validate();
    },
    clear() {
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.loginForm.reset();
    },
  },
};
</script>

<style></style>
