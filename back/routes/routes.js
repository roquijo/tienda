const express = require("express");
const usuarioController = require("../controllers/UsuarioController");
const productoController = require("../controllers/ProductosController");


const routes = express.Router();

// Rutas de usuarios
routes.get("/usuarios", usuarioController.getAll);
routes.get("/usuarios/:usuario", usuarioController.getByUser);
routes.post("/usuarios/", usuarioController.insert);
routes.put("/usuarios/:usuario", usuarioController.update);
routes.delete("/usuarios/:usuario", usuarioController.delete);
routes.post("/validarUsuario", usuarioController.validarUsuario);


// Rutas de productos
routes.get("/productos", productoController.getAll);
routes.get("/productos/:id", productoController.getById);
routes.post("/productos/", productoController.insert);
routes.put("/productos/:id", productoController.update);
routes.delete("/productos/:id", productoController.delete);

module.exports= routes;