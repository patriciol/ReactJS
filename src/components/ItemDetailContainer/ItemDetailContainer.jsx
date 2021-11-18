import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../Services/getFirestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {


    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true)

   
    const { Id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection('items').doc(Id).get()

        dbQuery
        .then(resp => setDetalle({ id : resp.id , ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 

       /*  getItem

            .then(res => setDetalle(res.find(prod => prod.id === Id)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) */

    },[Id])



    return (
        <div className="contenedorDetalle">
            
            {
                loading ? <h5>Cargando Detalle..</h5> : <ItemDetail detalle={detalle} />
            }

        </div>
    )
}

export default ItemDetailContainer
