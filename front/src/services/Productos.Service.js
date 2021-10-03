import httpClient from "./httpClient";

const END_POINT_PRODUCTO =  "/api/productos";


const getAllProductos = () => httpClient.get(END_POINT_PRODUCTO); 

const getProductByID = (id) => httpClient.get(END_POINT_PRODUCTO, {"id":id});

const insertProducto = (producto) => httpClient.post(END_POINT_PRODUCTO, producto); 

export{
    getAllProductos,
    insertProducto,
    getProductByID
}