const productoModel = require("../models/Productos");

module.exports = class ProductosController {
    
    static async getAll(req, res) {
        try {
            const productos = await productoModel.find();
            res.status(200).json(productos);
        } catch (err) {
            res.status(404).json({ mensaje: err.mensaje });
        }
    }

    static async getById(req, res) {
        const id = req.params.id;
        try {
            const productos = await productoModel.findOne({"id":id});
            if (productos != null) {
                res.status(200).json(productos);
            } else {
                res.status(404).json();
            }
            
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async insert(req, res) {
        try {
            const producto = req.body;
            const nuevoProducto = await productoModel.create(producto);
            res.status(201).json(nuevoProducto);
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const producto = req.body;
            const actualizarproductos = await productoModel.updateOne({"id":id},producto);
            res.status(200).json(actualizarproductos);
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await productoModel.deleteOne({"id":id});
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }
}
