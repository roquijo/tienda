const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    "code": Number,
    "nombre": String,
    "apellido": String,
    "usuario": String,
    "correo": String,
    "contraseña": Number,
    "ciudad": String,
    "dirección": String,
    "edad": Number
});

module.exports = mongoose.model("Clientes", clienteSchema);