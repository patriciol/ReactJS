const detalleItem =[
    { id: "1", foto: '../assets/image/pizza1.jpg', nombre: "Mozzarella", descripcion: "Salsa de tomates mendocinos, mozzarella Fior di latte, mozzarella filante, orégano, aceitunas y oliva ", precio: 850, stock:5 , categoria:"pizza" },
    { id: "2", foto: '../assets/image/pizza2.jpg', nombre: "Fugazzeta", descripcion: "Mozzarella filante, mozzarella Fior di latte, cebolla blanca, cebolla morada, cebolla de verdeo, orégano fresco y oliva", precio: 850 ,stock:3, categoria:"pizza"},
    { id: "3", foto: '../assets/image/pizza3.jpg', nombre: "Margarita", descripcion: "Descripcion pizza 3", precio: 850,stock:10, categoria:"pizza"},
    { id: "4", foto: '../assets/image/empanada1.jpg', nombre: "Bondiola", descripcion: "Empanada de bondiola, jugo de naranja, cebolla y cilantro", precio: 120, stock:3 , categoria:"empanada" },
    { id: "5", foto: '../assets/image/empanada2.jpg', nombre: "Roque", descripcion: "Empanada de roquefort y jamon", precio: 120 ,stock:4, categoria:"empanada"},
    { id: "6", foto: '../assets/image/empanada3.jpg', nombre: "Jamon y Queso", descripcion: "Empanada frita de jamón y mozzarella", precio: 120,stock:8, categoria:"empanada"},
    { id: "7", foto: '../assets/image/pizza2.jpg', nombre: "Pepperoni", descripcion: "Salsa de tomates mendocinos, mozzarella filante, mozzarella ahumada, pepperoni y oliva", precio: 1100 ,stock:3, categoria:"pizza"},
    { id: "8", foto: '../assets/image/pizza3.jpg', nombre: "Pestare", descripcion: "Crema de ajo asado, queso Sbrinz, jamón crudo, pesto de rúcula, Sbrinz rallado y oliva", precio: 1100,stock:10, categoria:"pizza"}
];



export const getItem = new Promise((res, rej) => {
    setTimeout(() => { res(detalleItem) }, 2000)
})