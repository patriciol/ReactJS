const detalleItem =
    { id: 1, foto: './assets/image/pizza1.jpg', nombre: "Pizza 1", descripcion: "Descripcion 1", precio: 300, stock: 5, categoria: "pizza" }



export const getItem = new Promise((res, rej) => {
    setTimeout(() => { res(detalleItem) }, 2000)
})