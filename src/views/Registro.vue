<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <legend class="mb-3 mt-5">
          <h2>Registro Nuevo Usuario</h2>
        </legend>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="name"
            :counter="40"
            :rules="nameRules"
            label="Nombres"
            placeholder="Ingrese nombres"
            filled
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            :counter="40"
            :rules="lastnameRules"
            label="Apellidos"
            placeholder="Ingrese appellidos"
            filled
            required
          ></v-text-field>
          <v-text-field
            v-model="nickname"
            :rules="nicknameRules"
            label="Nickname"
            placeholder="Ingrese un nickname"
            filled
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            placeholder="Ingrese un correo"
            filled
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
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
            v-model="confirpass"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, passwordConfir]"
            :type="show2 ? 'text' : 'password'"
            name="confirpass"
            label="Confirme Contraseña"
            hint="Ingrese al menos 8 caracteres"
            class="input-group--focused"
            counter
            @click:append="show2 = !show2"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="12">
          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'Aceptar para continuar!']"
            label="Estás de acuerdo?"
            required
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="6" md="2" lg="2">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Confirmar
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn color="error" class="mr-4" @click="reset">
            Limpiar Forma
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn color="warning" @click="resetValidation">
            Limpiar Validación
          </v-btn>
        </v-col>
      </v-row>
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
    nicknameRules: [
      (v) => !!v || "Nickname es requerido"
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
    show1: false,
    show2: false,
    password: "",
    confirpass: "",
    rules: {
      required: (value) => !!value || "Requerido.",
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
  },
  computed: {
    passwordConfir() {
      return () =>
        this.password === this.confirmPassword ||
        "Las contraseñas deben coincidir";
    },
  },
};
</script>

<style></style>
