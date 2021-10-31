import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ detalle }) {


    /*     Creo mi hook de estado para la cantidad a comprar del producto */
    const [cantidad, setCantidad] = useState(0)


    /*     Declaro mis funcion para sumar y restar stock, utilizo setCantidad para 
    modificar el valor a Cantidad */
    const sumar = () => {



        cantidad < parseInt(detalle.stock) ? setCantidad(cantidad + 1) : alert("Stock Maximo:" + parseInt(detalle.stock))

    }

    const restar = () => {

        cantidad === 0 ? alert("Cantidad no puede ser menor a cero") : setCantidad(cantidad - 1)
    }

    const comprar = () => {

        cantidad === 0 ? alert('Primero debe elegir la cantidad') : alert(`Agregar ${cantidad} unidades de ${detalle.nombre}`)

    }


    return (
        <>

            <div className="contendorBotones">

                <button className="btnSumaResta" onClick={restar}>-</button>
                <input className="inputCantidad" type="text" value={cantidad} />
                <button className="btnSumaResta" onClick={sumar}>+</button>
            </div>
            <div>
                <button className="btnComprar" onClick={comprar}>Agregar a carrito</button>
            </div>

        </>
    )
}

export default ItemCount
