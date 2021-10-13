const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    "nombre": String,
    "apellido": String,
    "usuario": String,
    "correo": String,
    "celular": Number,
    "direccion": String,
    "contraseña": String,
    "tipoUsuario": String
});

module.exports = mongoose.model("usuarios", usuariosSchema);