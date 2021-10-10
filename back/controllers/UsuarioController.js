const usuarioModel = require("../models/Usuarios");

module.exports = class UsuarioController {
    
    static async getAll(req, res) {
        try {
            const usuarios = await usuarioModel.find();
            res.status(200).json(usuarios);
        } catch (err) {
            res.status(404).json({ mensaje: err.mensaje });
        }
    }

    static async getById(req, res) {
        const id = req.params.id;
        try {
            const usuario = await usuarioModel.findOne({"id":id});
            if (usuario != null) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json();
            }
            
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async insert(req, res) {
        try {
            let usuario = req.body;
            usuario = await usuarioModel.create(usuario);
            usuario.contraseña = undefined;
            res.status(201).json(nuevocliente);
        } catch (err) {
            res.status(400).json({ "mensaje": err.mensaje });
        }
    }

    static async validarUsuario(req, res){
        try {

            const credenciales = req.body;           
            const usuario = await usuarioModel.findOne({"usuario": credenciales.usuario});
            if(usuario == undefined || usuario == null || usuario == ""){
                res.status(404).json({ "mensaje":"Usuario no valido" });
            }
            else if(usuario.contraseña != credenciales.contraseña){
                res.status(403).json({ "mensaje":"Contraseña no valida" });
            }
            else if(usuario.contraseña == credenciales.contraseña){
                res.status(200).json(usuario);
            }         
        } catch (err) {
            res.status(400).json({ "mensaje": err.mensaje });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const usuario = req.body;
            const actualizarUsuario = await usuarioModel.updateOne({"id":id},usuario);
            res.status(200).json(actualizarUsuario);
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await usuarioModel.deleteOne({"id":id});
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }
}
