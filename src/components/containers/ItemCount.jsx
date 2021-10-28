import React from 'react'
import { useState } from 'react'
import "./Estilos.css"


export default function ItemCount(props) {

    const [cantidad, setCantidad] = useState(0)

    const sumar = () => {
        if (cantidad < props.stock) {
            setCantidad(cantidad + 1)
        }
        else {
            alert("Stock Maximo: " + props.stock)
        }

    }

    const restar = () => {
        if (cantidad === 0) {
            alert("Cantidad no puede ser menor a cero")
        }
        else {
            setCantidad(cantidad - 1)

        }

    }

    const comprar = () => {

        alert(`Agregaste ${cantidad} unidades del ${props.nombre}`)
    }


    return (

        <>
            <div className="botones">
                <button onClick={restar}>-</button>
                <input className="input" type="text" value={cantidad} />
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={comprar}>Agregar a Carrito</button>
        </>

    )
}
