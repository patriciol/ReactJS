import React,{useEffect} from 'react'
import { useCartContext, } from '../CarContext/CarContext'


function CartItem({ prod }) {

  const eliminar = () => {
        removeItem(prod)

    } 

     const { removeItem } = useCartContext();
 


    return (
        <>

            <div>
                <p> {prod.detalle.nombre}: {prod.cantidad} unidades</p>
            </div>
        </>
    )
}

export default CartItem
