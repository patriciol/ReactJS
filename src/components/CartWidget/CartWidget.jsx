import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CarContext/CarContext'


function CartWidget() {

    const { cantidadItems } = useCartContext();

    return (
        <>
            <div className="contenedorCartWidget" style={{ visibility: cantidadItems() > 0 ? 'visible' : 'hidden' }}>
                <Link to="/cart"><img className="carrito" src="../assets/image/carrito.png" alt="carrito" /></Link>
                <h5 className="contador">{cantidadItems()}</h5>
            </div>
        </>
    )
}

export default CartWidget