import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

function ItemCount({ detalle, onAdd }) {

    const [cantidad, setCantidad] = useState(0)
    const [compraRealizada, setcompraRealizada] = useState(false)

    const sumar = () => {
        cantidad < parseInt(detalle.stock) ? setCantidad(cantidad + 1) : swal("Stock Maximo!", "Cantidad maxima:" + detalle.stock, "info")
    }

    const restar = () => {
        cantidad === 0 ? swal("Error", "Cantidad no puede ser menor a cero", "info") : setCantidad(cantidad - 1)
    }

    const comprar = () => {
        if (cantidad === 0) { swal("Primero debe elegir la cantidad"); }
        else {
            setcompraRealizada(onAdd(cantidad))
        }
    }

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