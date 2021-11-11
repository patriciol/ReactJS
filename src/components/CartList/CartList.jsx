import React from 'react'
import { useCartContext } from '../CarContext/CarContext'
import CartItem from '../CartItem/CartItem'
import './CartList.css'

function CartList() {

    const { cartList, clear } = useCartContext();

    const eliminarTodo = () => {
        clear()
    }


    
    return (
        <>

            <div className="contenedorCarrito">
                <h5>Carro de compras</h5>

                {
                    (cartList.length > 0)
                        ? cartList.map(prod => <CartItem prod={prod}/>)
                        : <div>Carrito Vacio</div>

                }

                <button>Comprar</button>
                <button onClick={eliminarTodo} >Vaciar carrito</button>
            </div>
        </>




    )
}

export default CartList
