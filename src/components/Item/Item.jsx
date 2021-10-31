import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
function Item({producto}) {
    return (
        <div className="card">
           
            <h4 className="tituloCard"> {producto.nombre}</h4>
           <img className="fotoCard" src={producto.foto} alt={producto.nombre} />
            <p className="descCard">{producto.descripcion}</p>
            <span className="precioCard">Precio por unidad: ${producto.precio}</span>
            <ItemCount detalle={producto} />
        </div>
    )
}

export default Item
