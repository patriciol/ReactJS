import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (

        <>
            <h3>{props.nombre}</h3>
            <ItemCount stock={props.stock} nombre={props.nombre}/>
        </>
    )
}

export default ItemListContainer
