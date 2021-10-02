import httpClient from "./httpClient";

const END_POINT_PRODUCTO =  "/api/productos";


const getAllProductos = () => httpClient.get(END_POINT_PRODUCTO); 

const insertProducto = (producto) => httpClient.post(END_POINT_PRODUCTO, producto); 

export{
    getAllProductos,
    insertProducto
}