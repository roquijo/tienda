import httpClient from "./httpClient";

const END_POINT =  "/api/productos";


const getAllProductos = () => httpClient.get(END_POINT); 

const getProducto = (id) => httpClient.get(END_POINT + "/" + id);

const insertProducto = (producto) => httpClient.post(END_POINT, producto); 

const updateProducto = (id, producto) => httpClient.put(END_POINT + "/" + id, producto); 

const deleteProducto = (id) => httpClient.delete(END_POINT + "/" + id);


export{
    getAllProductos,
    insertProducto,
    getProducto,
    updateProducto,
    deleteProducto
}