import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    function addItem(items) {

        const agregado = isInCart(items)

        if (!agregado) {
            setCartList([
                ...cartList,
                items
            ])

            return true;

        }
        else {

            let posicion = cartList.findIndex(prod => prod.detalle.id === items.detalle.id)

            if ((cartList[posicion].cantidad + items.cantidad) > items.detalle.stock) {
                alert("Stock Maximo es: " + items.detalle.stock + ". Ya tienes " + cartList[posicion].cantidad + " unidades en el carrito")
                setCartList(cartList)

                return false;

            }
            else {
                cartList[posicion].cantidad = cartList[posicion].cantidad + items.cantidad
                setCartList([...cartList])
                return true;
            }
        }
    }

    function removeItem(items) {
        setCartList(cartList.filter(prod => prod.detalle.id !== items.detalle.id))
    }


    function clear() {
        setCartList([])
    }

    function isInCart(items) {

        return cartList.includes(cartList.find(prod => prod.detalle.id === items.detalle.id));

    }

    const mostrarListado = () => {
        console.log(cartList)
    }

    function precioTotal() {
        let totalCarrito = cartList.reduce((total, prod) => {
            return (prod.cantidad * prod.detalle.precio) + total;
        }, 0)

        return totalCarrito;
    }

    function cantidadItems() {
        let totalItems = cartList.reduce((total, prod) => {
            return (prod.cantidad + total);
        }, 0)

        return totalItems;
    }

    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            addItem,
            removeItem,
            clear,
            isInCart,
            precioTotal,
            cantidadItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
