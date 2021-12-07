import React from 'react'
import { useCartContext } from '../CarContext/CarContext'
import './CartItem.css'
import { Button } from 'reactstrap'

function CartItem({ prod }) {

    const { removeItem } = useCartContext();

    const eliminar = () => {
        removeItem(prod)

    }
    return (
        <>
            <div className="detalleItemCarrito">
                <p className="detalleCarrito"> {prod.detalle.nombre}: {prod.cantidad} unidades a {prod.detalle.precio}$ --Total producto: {prod.detalle.precio * prod.cantidad}$</p> <Button color="danger" size="sm" className="borrarItem" onClick={eliminar}>X</Button>
            </div>
        </>
    )
}

export default CartItem
