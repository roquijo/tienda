<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <!-- <div class="container mt-4">
    <div class="row justify-content-md-center">
      <div class="col-8">
        <form method="post">
          <div class="col-mb-5">
            <img
              src="../Images/login.png"
              id="imgLogin"
              class="imgLogin"
              alt="imgLogin"
            >
          </div>
          <h1 class="h2 mb-2 fw-normal">IDENTIFIQUESE</h1>
          <div class="formulario col">
            <label>Desea Ingresar Como:</label>
            <select name="Tipo Usuario">
              <option>Administrador</option>
              <option>Cliente</option>
            </select>
            <label for="floatingInput">Usuario:</label>
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <a href="/productos"
              ><input type="button" value="Ingresar" class="btnIngreso"
            /></a>
            <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
          </div>
        </form>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data: () => ({
    select: null,
    items: ["Administador","Cliente"],
    checkbox: false,
  }),
};

</script>

<style></style>
