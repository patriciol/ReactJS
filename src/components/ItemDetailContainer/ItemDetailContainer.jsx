import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItem } from '../../Services/getItem'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {


    const [detalle, setDetalle] = useState([])
    const [loading, setLoading] = useState(true)

   
    const { Id } = useParams();

    useEffect(() => {


        getItem

            .then(res => setDetalle(res.find(prod => prod.id === Id)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))



    },[Id])



    return (
        <div className="contenedorDetalle">
            
            {


                loading ? <h5>HOLAAAAAACargando Detalle..</h5> : <ItemDetail detalle={detalle} />
            }

        </div>
    )
}

export default ItemDetailContainer
