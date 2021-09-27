const express = require("express");
const clientesController = require("../controllers/clientescontroller");

const router = express.Router();

// Rutas de productos 
router.get("/clientes", clientesController.getAll);
router.get("/clientes/:id", clientesController.getById);
router.post("/clientes/", clientesController.insert);
router.put("/clientes/:id", clientesController.update);
router.delete("/clientes/:id", clientesController.delete);

module.exports= router;