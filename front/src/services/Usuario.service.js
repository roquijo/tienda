import httpClient from "./httpClient";

const END_POINT_USUARIO =  "/api/usuarios";


const gettAllUsuario = () => httpClient.get(END_POINT_USUARIO); 

export{
    gettAllUsuario
}