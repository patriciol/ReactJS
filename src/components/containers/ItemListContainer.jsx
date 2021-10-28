import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    return (

        <>
            <h3>{props.nombre}</h3>
            <ItemList/>
        </>
    )
}

export default ItemListContainer
