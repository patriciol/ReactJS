import React from 'react'
import { useCartContext } from '../CarContext/CarContext'
import CartItem from '../CartItem/CartItem'
import './CartList.css'
import { Link } from 'react-router-dom'

function CartList() {

    const { cartList, precioTotal, clear } = useCartContext();

    
    return (
        <>
            <div className="contenedorCarrito">
                <h5>Carro de compras</h5>

                {
                    (cartList.length > 0)
                        ? cartList.map(prod => <CartItem prod={prod} />)
                        : <div>Carrito Vacio</div>
                }
                <div className="botonera">
                    {
                        (cartList.length > 0)
                            ? (<>
                                <h5>Total: {precioTotal()}$</h5>
                                <button>Comprar</button> <button onClick={clear} >Vaciar carrito</button></>)
                            : <Link to="/"><button>Ir a la tienda</button></Link>
                    }
                </div>
            </div>
        </>

    )
}

export default CartList
