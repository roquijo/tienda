const express = require("express");
const usuarioController = require("../controllers/UsuarioController");
const productoController = require("../controllers/ProductosController");


const routes = express.Router();

// Rutas de usuarios
routes.get("/usuarios", usuarioController.getAll);
routes.get("/usuarios/:id", usuarioController.getById);
routes.post("/usuarios/", usuarioController.insert);
routes.put("/usuarios/:id", usuarioController.update);
routes.delete("/usuarios/:id", usuarioController.delete);

// Rutas de productos
routes.get("/productos", productoController.getAll);
routes.get("/productos/:id", productoController.getById);
routes.post("/productos/", productoController.insert);
routes.put("/productos/:id", productoController.update);
routes.delete("/productos/:id", productoController.delete);

module.exports= routes;