import React,{useEffect} from 'react'
import { useCartContext, } from '../CarContext/CarContext'
import { Link } from 'react-router-dom'
function CartItem({ prod}) {

   

     const { removeItem } = useCartContext();
 
     const eliminar = () => {
        removeItem(prod)

    } 

    return (
        <>

            <div>
                <p>id {prod.detalle.nombre} y cantidad {prod.cantidad}</p>
                <Link to="/cart"><button onClick={eliminar}>borrar</button></Link>

            </div>
        </>
    )
}

export default CartItem
