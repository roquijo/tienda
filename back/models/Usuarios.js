const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    "id": Number,
    "nombre": String,
    "apellido": String,
    "usuario": String,
    "correo": String,
    "contraseña": String,
    "tipoUsuario": String
});

module.exports = mongoose.model("usuarios", usuariosSchema);