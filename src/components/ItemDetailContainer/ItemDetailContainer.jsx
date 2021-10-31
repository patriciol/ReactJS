import React from 'react'
import { useState, useEffect } from 'react'
import { getItem } from '../../Services/getItem'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {


    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem
            .then(res => setDetalle(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])




    return (
        <div className="contenedorDetalle">
            {
                loading ? <h5>Cargando Detalle..</h5>: <ItemDetail detalle={detalle}/>
            }

        </div>
    )
}

export default ItemDetailContainer
