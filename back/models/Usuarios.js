const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    "id": Number,
    "nombre": String,
    "apellido": String,
    "usuario": String,
    "correo": String,
    "contraseña": String,
    "ciudad": String,
    "dirección": String,
    "edad": Number,
    "tipoUsuario": Number
});

module.exports = mongoose.model("usuarios", usuariosSchema);