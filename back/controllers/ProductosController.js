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
            const producto = await productoModel.findOne({"id":id});
            if (producto != null) {
                res.status(200).json(producto);
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
            if(req.file != undefined || req.file != null){
                const imageName = req.file.filename;
                if (imageName != undefined || imageName != null || imageName != "") {
                    producto.foto= "/" + imageName;
                }  
            }
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
            if(req.file != null || req.file != undefined){
                producto.foto = "/" + req.file.filename;
            }
            const actualizarproductos = await productoModel.updateOne({"id":id},producto);
            res.status(200).json(actualizarproductos);
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async updateProductoConFoto(req, res) {
        try {
            const id = req.params.id;
            const producto = req.body;
            const imageName = req.file.filename;
            producto.foto = "/" + imageName;
            await productoModel.updateOne({ "id": id }, producto);
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
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
