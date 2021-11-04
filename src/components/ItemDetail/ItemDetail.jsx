import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({ detalle }) {

    const [cantidad, setCantidad] = useState(0)

     const onAdd = (count) => {
        setCantidad(count)
    }

    console.log(cantidad)


    return (
        <>

            <img className="detalleFoto" src={detalle.foto} alt="" />
            <div className="textoDetalle">
                <p><span className="negrita">-Producto: </span> {detalle.nombre}</p>
                <p><span className="negrita">-Detalle: </span>{detalle.descripcion}</p>
                <p><span className="negrita">-Precio: </span> {detalle.precio}$</p>
                <p><span className="negrita">-Stock disponible: </span>{detalle.stock}</p>
                <ItemCount detalle={detalle} onAdd={onAdd} />
                <Link to={'/'}><button className="btnVolver">Volver a tienda</button></Link>
            </div>

        </>
    )
}

export default ItemDetail
