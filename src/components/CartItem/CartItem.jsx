import React from 'react'
import { useCartContext } from '../CarContext/CarContext'
import './CartItem.css'

function CartItem({ prod }) {

  const eliminar = () => {
        removeItem(prod)

    } 

     const { removeItem } = useCartContext();
 


    return (
        <>

            <div className="detalleItemCarrito">
                <p className="detalleCarrito"> {prod.detalle.nombre}: {prod.cantidad} unidades a {prod.detalle.precio}$ --Total producto: {prod.detalle.precio*prod.cantidad}$</p> <button className="borrarItem" onClick={eliminar}>X</button>
            </div>
        </>
    )
}

export default CartItem
