import httpClient from "./httpClient";

const END_POINT =  "/api/usuarios";

const VALIDAR = "/api/validarUsuario"

const validateUser = (usuario, contraseña) => {
    const user = {
        "usuario" : usuario,
        "contraseña": contraseña
    };
    return httpClient.post(VALIDAR, user); 
}


const getAllUsuario = () => httpClient.get(END_POINT); 

const getUsuario = (id) => httpClient.get(END_POINT + "/" + id);

const insertUsuario = (usuario) => httpClient.post(END_POINT, usuario); 

const updateUsuario = (id, usuario) => httpClient.put(END_POINT + "/" + id, usuario); 

const deleteUsuario = (id) => httpClient.delete(END_POINT + "/" + id);

export{
    validateUser,
    getAllUsuario,
    getUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario
}