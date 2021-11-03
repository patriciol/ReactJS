
/* declaro mi arreglo de porductos */

const productos = [
    { id: "1", foto: '../assets/image/pizza1.jpg', nombre: "Mozzarella", precio: 850, stock:5 , categoria:"pizza" },
    { id: "2", foto: '../assets/image/pizza2.jpg', nombre: "Fugazzeta", precio: 850 ,stock:3, categoria:"pizza"},
    { id: "3", foto: '../assets/image/pizza3.jpg', nombre: "Margarita", precio: 850,stock:10, categoria:"pizza"},
    { id: "4", foto: '../assets/image/empanada1.jpg', nombre: "Bondiola", precio: 120, stock:3 , categoria:"empanada" },
    { id: "5", foto: '../assets/image/empanada2.jpg', nombre: "Roque", precio: 120 ,stock:4, categoria:"empanada"},
    { id: "6", foto: '../assets/image/empanada3.jpg', nombre: "Jamon y queso", precio: 120,stock:8, categoria:"empanada"},
    { id: "7", foto: '../assets/image/pizza2.jpg', nombre: "Pepperoni", precio: 1100 ,stock:3, categoria:"pizza"},
    { id: "8", foto: '../assets/image/pizza3.jpg', nombre: "Pestare", precio: 1100,stock:10, categoria:"pizza"}
];


/* declaro mi promesa, donde devuelvo los productos cuando el resultado es res */
export const getData = new Promise((res, rej) => {
    setTimeout(() => { res(productos);}, 2000);
})