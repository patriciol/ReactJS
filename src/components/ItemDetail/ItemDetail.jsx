import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CarContext/CarContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({ detalle }) {

    const { addItem } = useCartContext();

    const onAdd = (count) => {

        return addItem({ detalle, cantidad: count })
    }

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