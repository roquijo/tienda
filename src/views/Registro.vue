<template>
    <main class="app">
        <div id="msg"></div>

        <!-- Mensajes de Verificación -->
        <div id="error" class="alert alert-danger ocultar" role="alert">
            Las Contraseñas no coinciden, vuelve a intentar !
        </div>
        <div id="empty" class="alert alert-danger ocultar" role="alert">
            El campo contraseña está vacío!
        </div>
        <div id="ok" class="alert alert-success ocultar" role="alert">
            Las Contraseñas coinciden ! (Procesando formulario ... )
        </div>
        <!-- Fin Mensajes de Verificación -->

        <form class="form-horizontal needs-validation" onsubmit="verificarPasswords(); return false" action="#"
            method="post">
            <fieldset>
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
                        <div>
                            <div class="col-md-12 form-group text-center">
                                <div>
                                    <label class="col-md-4 control-label mb-3 form-label">
                                        <h3>Registro</h3>
                                    </label>
                                </div>
                                <div>
                                    <button id="signUp" name="submit"
                                        class="btn btn-dark">Confirmar</button>
                                    <button type="reset" name="reset" class="btn btn-secondary">Limpiar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    </main>
</template>

<script>
export default {
    data: () => ({
    }),
    methods:{
        function () {
            "use strict";

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll(".needs-validation");

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms).forEach(function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }

                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },

        verificarPasswords() {

    // Ontenemos los valores de los campos de contraseñas 
    let password = document.getElementById('password');
    let passwordConf = document.getElementById('passwordConf');

    // Verificamos si las constraseñas no coinciden

    if (password.value == "") {
        
        // Si las constraseñas están vacías mostramos un mensaje 
        document.getElementById("empty").classList.add("mostrar");

        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
        

        return false;
    } else {

        if (password.value != passwordConf.value) {

            // Si las constraseñas no coinciden mostramos un mensaje 
            document.getElementById("error").classList.add("mostrar");

            // Si las contraseñas ya no están vacías ocultamos el mensaje de error
            document.getElementById("empty").classList.remove("mostrar");

            return false;

        } else {

            // Si las contraseñas ya no están vacías ocultamos el mensaje de error
                document.getElementById("empty").classList.remove("mostrar");
                
                // Si las contraseñas coinciden ocultamos el mensaje de error
                document.getElementById("error").classList.remove("mostrar");

                // Mostramos un mensaje mencionando que las Contraseñas coinciden 
                document.getElementById("ok").classList.remove("ocultar");

                // Desabilitamos el botón de login 
                document.getElementById("signUp").disabled = true;

                // Refrescamos la página (Simulación de envío del formulario) 
                setTimeout(function () {
                    location.reload();
                }, 2000);

                return true;
                }
            }
        }
    }
}
</script>

<style>
.ocultar {
    display: none;
}

.mostrar {
    display: block;
}
</style>