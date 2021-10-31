import React from 'react'
import './ItemDetail.css'

function ItemDetail({detalle}) {
    
    console.log({detalle})

    return (
        <>

            <img className="detalleFoto" src={detalle.foto} alt="" />
            <div className="textoDetalle">
            <p>Producto: {detalle.nombre}</p>
            <p>Detalle:{detalle.descripcion}</p>
            <p>Precio: {detalle.precio}</p>
            <p>Stock disponible:{detalle.stock}</p>
            </div>

        </>
    )
}

export default ItemDetail
