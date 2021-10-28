import React from 'react';
import ItemCount from './ItemCount'
import "./Estilos.css"

const Item = ({ detail }) => {

    return (
        <div className="contenedorItem">
            <img className="imgProd" src={detail.foto} alt={detail.nombre} />
            <h4>{detail.nombre}</h4>
            <p>{detail.descripcion}</p>
            <span>${detail.precio}</span>
            <ItemCount stock={detail.stock} nombre={detail.nombre} />
        </div>
    )
}

export default Item