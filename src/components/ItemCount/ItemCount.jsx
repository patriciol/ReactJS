import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'


function ItemCount({ detalle, onAdd }) {


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

        if (cantidad === 0) { alert('Primero debe elegir la cantidad') }
        else {
            /*             alert(`Agregar ${cantidad} unidades de ${detalle.nombre}`)
             */

            setcompraRealizada(onAdd(cantidad))

 /*          setcompraRealizada(true)
 */        }



    }



    const [compraRealizada, setcompraRealizada] = useState(false)


    return (
        <>

            <div className="contendorBotones">

                <button className="btnSumaResta" onClick={restar} >-</button>
            <input className="inputCantidad" type="text" value={cantidad} onChange={(event) => this.inputChangedHandler(event)} />
            <button className="btnSumaResta" onClick={sumar}>+</button>
        </div>

            {
        compraRealizada ? <Link to="/cart"><button className="btnComprar">Ir a carrito</button></Link> :
            <button className="btnComprar" onClick={comprar}>Agregar</button>

    }



        </>
    )
}

export default ItemCount
