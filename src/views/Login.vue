<template>
  <div>
    <form method="post">
      <img
        src="../Images/login.png"
        id="imgLogin"
        class="imgLogin"
        alt="imgLogin"
      >
      <h1 class="h2 mb-2 fw-normal">IDENTIFIQUESE</h1>
      <div class="formulario">
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
</template>

<script></script>

<style></style>
