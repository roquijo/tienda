const express = require("express");
const usuarioController = require("../controllers/UsuarioController");
const productoController = require("../controllers/ProductosController");

// Carga de archivos
const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

const upload = multer({storage:storageConfig})

const router = express.Router();

// Rutas de usuarios
router.get("/usuarios", usuarioController.getAll);
router.get("/usuarios/:usuario", usuarioController.getByUser);
router.post("/usuarios/", usuarioController.insert);
router.put("/usuarios/:usuario", usuarioController.update);
router.delete("/usuarios/:usuario", usuarioController.delete);
router.post("/validarUsuario", usuarioController.validarUsuario);


// Rutas de productos
router.get("/productos", productoController.getAll);
router.get("/productos/:id", productoController.getById);
// routes.post("/productos/", productoController.insert);
router.post("/productos/", upload.single("foto"), productoController.insert);
router.put("/productos/:id", productoController.update);
router.patch("/productos/:id/foto", upload.single("foto"), productoController.updateProductoConFoto);
router.delete("/productos/:id", productoController.delete);

module.exports= router;