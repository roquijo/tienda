const clienteModel = require("../models/clientes");

module.exports = class clientesController {
    
    static async getAll(req, res) {
        try {
            const clientes = await clienteModel.find();
            res.status(200).json(clientes);
        } catch (err) {
            res.status(404).json({ mensaje: err.mensaje });
        }
    }

    static async getById(req, res) {
        const id = req.params.id;
        try {
            const cliente = await clienteModel.findOne({"code":id});
            if (cliente != null) {
                res.status(200).json(cliente);
            } else {
                res.status(404).json();
            }
            
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async insert(req, res) {
        try {
            const cliente = req.body;
            const nuevocliente = await clienteModel.create(cliente);
            res.status(201).json(nuevocliente);
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const cliente = req.body;
            const actualizarcliente = await clienteModel.updateOne({"code":id},cliente);
            res.status(200).json(actualizarcliente);
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await clienteModel.deleteOne({"code":id});
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }
}
