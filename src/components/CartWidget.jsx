import './NavBar/NavBar.css'
import { Link } from 'react-router-dom'

function CartWidget() {
    return (
        <Link to="/cart"><img className="carrito" src="../assets/image/carrito.png" /></Link>
    )
}

export default CartWidget
