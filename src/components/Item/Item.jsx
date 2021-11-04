import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

import{Link} from 'react-router-dom'

import './Item.css'
function Item({producto}) {

    const[cantidad,setCantidad] = useState(0)

    const onAdd = (count) =>{
        setCantidad(count)
    }


    return (
        <div className="card">
           
            <h4 className="tituloCard"> {producto.nombre}</h4>
           <img className="fotoCard" src={producto.foto} alt={producto.nombre} />
            <Link to={`/item/${producto.id}`}><button className="btnDescripcion">Descripcion</button></Link>
            <span className="precioCard">Precio por unidad: ${producto.precio}</span>
            <ItemCount detalle={producto} onAdd={onAdd} />
        </div>
    )
}

export default Item