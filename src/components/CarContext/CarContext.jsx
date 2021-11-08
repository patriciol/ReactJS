import { render } from '@testing-library/react'
import { createContext, useState, useContext,useEffect } from 'react'

//creo el context
const CartContext = createContext()

//consumo el contexto creado
export const useCartContext = () => useContext(CartContext)


// defino el provider de mi contexto, donde recibe como parametro los childern de mi APP
const CartContextProvider = ({ children }) => {


    const [cartList, setCartList] = useState([])


    function addItem(items) {


        const agregado = isInCart(items)

        if (!agregado) {
            setCartList([
                ...cartList,
                items
            ])
        }
        else {

            let posicion = cartList.findIndex(prod => prod.detalle.id === items.detalle.id)

            cartList[posicion].cantidad = cartList[posicion].cantidad + items.cantidad
            setCartList(cartList)

        }

    }

    function removeItem(items) {

        let posicion = cartList.findIndex(prod => prod.detalle.id === items.detalle.id)
        cartList.splice(posicion, 1)
        setCartList(cartList)
    }


    function clear(items) {

        setCartList([])

    }

    //funcion que le paso el item a agregar al carrito, y compara contra el listado del carrito
    //devuelve true o false

    function isInCart(items) {

        return cartList.includes(cartList.find(prod => prod.detalle.id === items.detalle.id));

    }

    const mostrarListado = () => {
        console.log(cartList)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
