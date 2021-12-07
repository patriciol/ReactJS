import React from 'react'
import Item from '../Item/Item'

function ItemList({ productos }) {
    return (
        <>
            {
                productos.map(prod => <Item key={prod.id} detalle={prod} />)
            }
        </>
    )
}

export default ItemList
