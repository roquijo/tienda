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

    static async getByUser(req, res) {
        const usuario = req.params.usuario;
        try {
            const user = await usuarioModel.findOne({"usuario":usuario});
            if (user != null) {
                res.status(200).json(user);
            } else {
                res.status(404).json();
            }
            
        } catch (err) {
            res.status(400).json({ mensaje: err.mensaje });
        }
    }

    static async insert(req, res) {
        try {
            const usuario = req.body;
            const nuevoUsuario = await usuarioModel.create(usuario);
            res.status(201).json(nuevoUsuario);
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
            const usuario = req.params.usuario;
            const usuarioUpdate = req.body;
            const actualizarUsuario = await usuarioModel.updateOne({"usuario":usuario},usuarioUpdate);
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
