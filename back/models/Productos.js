const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    "id": Number,
    "nombre": String,
    "precio": Number,
    "especificacion": String,
    "foto": String
});

module.exports = mongoose.model("productos", productoSchema);