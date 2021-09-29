import httpClient from "./httpClient";

const END_POINT_PRODUCTO =  "/api/productos";


const gettAllProductos = () => httpClient.get(END_POINT_PRODUCTO); 

export{
    gettAllProductos
}