import React from 'react'
import { useCartContext } from '../CarContext/CarContext'
import { useState } from 'react'
import CartItem from '../CartItem/CartItem'
import './CartList.css'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../Services/getFirestore'


function CartList() {

    const { cartList, precioTotal, clear } = useCartContext();
    const [userData,setUserData] = useState({ name: "", mail: "", telefono: "" })

    const handleForm = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value
        })
    }


    const generarOrden = (e) => {
        e.preventDefault()

        let orden = {}

        orden.buyer = userData;
        orden.total = precioTotal()
        orden.items = cartList.map(item => {
            const id = item.detalle.id;
            const nombre = item.detalle.nombre;
            const precio = item.detalle.precio * item.cantidad;
            return { id, nombre, precio }
        })

        const dataBase = getFirestore()

        dataBase.collection("orders").add(orden)
        .then(response => alert("Compra realizada, su Id es "+response.id))
        .catch (error => alert("Error:", error))
        .finally(() => clear())
    }

    return (
        <>
            <div className="contenedorCarrito">
                <h5>Carro de compras</h5>

                {
                    (cartList.length > 0)
                        ? cartList.map(prod => <CartItem key={prod.detalle.id} prod={prod} />)
                        : <div>Carrito Vacio</div>
                }

                <form onChange={handleForm}>
                    <div className="formulario">
                        <input type="text" name="name" defaultValue={userData.name} placeholder="Nombre" />
                        <input type="email" name="mail" defaultValue={userData.mail} placeholder="Mail" />
                        <input type="number" name="telefono" defaultValue={userData.telefono} placeholder="Telefono" />
                    </div>
                    <div className="botonera">


                        {
                            (cartList.length > 0)
                                ? (<>
                                    <h5>Total: {precioTotal()}$</h5>
                                    <button onClick={generarOrden}>Comprar</button> <button onClick={clear} >Vaciar carrito</button></>)
                                : <Link to="/"><button>Ir a la tienda</button></Link>
                        }
                    </div>

                </form>
            </div>
        </>

    )
}

export default CartList
