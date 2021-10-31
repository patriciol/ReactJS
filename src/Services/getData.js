
/* declaro mi arreglo de porductos */

const productos = [
    { id: 1, foto: './assets/image/pizza1.jpg', nombre: "Pizza 1", descripcion: "Descripcion 1", precio: 300, stock:5 , categoria:"pizza" },
    { id: 2, foto: './assets/image/pizza2.jpg', nombre: "Pizza 2", descripcion: "Descripcion 2", precio: 200 ,stock:3, categoria:"pizza"},
    { id: 3, foto: './assets/image/pizza3.jpg', nombre: "Pizza 3", descripcion: "Descripcion 3", precio: 100,stock:10, categoria:"pizza"},
    { id: 4, foto: './assets/image/pizza1.jpg', nombre: "Pizza 1", descripcion: "Descripcion 1", precio: 300, stock:5 , categoria:"pizza" },
    { id: 5, foto: './assets/image/pizza2.jpg', nombre: "Pizza 2", descripcion: "Descripcion 2", precio: 200 ,stock:3, categoria:"pizza"},
    { id: 6, foto: './assets/image/pizza3.jpg', nombre: "Pizza 3", descripcion: "Descripcion 3", precio: 100,stock:10, categoria:"pizza"},
    { id: 5, foto: './assets/image/pizza2.jpg', nombre: "Pizza 2", descripcion: "Descripcion 2", precio: 200 ,stock:3, categoria:"pizza"},
    { id: 6, foto: './assets/image/pizza3.jpg', nombre: "Pizza 3", descripcion: "Descripcion 3", precio: 100,stock:10, categoria:"pizza"}
];


/* declaro mi promesa, donde devuelvo los productos cuando el resultado es res */
export const getData = new Promise((res, rej) => {
    setTimeout(() => { res(productos);}, 2000);
})