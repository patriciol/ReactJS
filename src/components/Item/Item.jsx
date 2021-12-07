import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../CarContext/CarContext'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({ detalle }) {

    const { addItem } = useCartContext();

    const onAdd = (count) => {
        return addItem({ detalle, cantidad: count })
    }

    return (
        <div className="card">
            <h4 className="tituloCard"> {detalle.nombre}</h4>
            <img className="fotoCard" src={detalle.foto} alt={detalle.nombre} />
            <Link to={`/item/${detalle.id}`}><button className="btnDescripcion">Mas Info</button></Link>
            <span className="precioCard">Precio: ${detalle.precio}</span>
            <span className="precioCard">Stock: {detalle.stock}</span>
            <ItemCount detalle={detalle} onAdd={onAdd} />
        </div>
    )
}

export default Item