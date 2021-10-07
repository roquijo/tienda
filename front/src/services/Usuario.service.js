import httpClient from "./httpClient";

// const END_POINT_USUARIO =  "/api/usuarios";

const VALIDAR = "/api/validarUsuario"


// const gettAllUsuario = () => httpClient.get(END_POINT_USUARIO); 

const validateUser = (usuario, contraseña) => {
    const user = {
        "usuario" : usuario,
        "contraseña": contraseña
    };
    return httpClient.post(VALIDAR, user); 
}


export{
    // gettAllUsuario,
    validateUser
}