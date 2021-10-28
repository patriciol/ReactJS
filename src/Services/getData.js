const productos = [
    { id: 1, foto: './assets/image/cuadro.jpeg', nombre: "Acuarela 1", descripcion: "Descripcion 1", precio: 300, stock:5 },
    { id: 2, foto: './assets/image/cuadro5.jpeg', nombre: "Acuarela 2", descripcion: "Descripcion 2", precio: 200 ,stock:3},
    { id: 3, foto: './assets/image/senalador.jpeg', nombre: "Acuarela 3", descripcion: "Descripcion 3", precio: 100,stock:10 }
];


export const getData = new Promise((res, rej) => {
    setTimeout(() => {
        res(productos);
    }, 2000);
})