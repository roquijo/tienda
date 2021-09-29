import httpClient from "./httpClient";

const END_POINT =  "/api/clientes";

const gettAllClientes = () => httpClient.get(END_POINT); 

export{
    gettAllClientes
}