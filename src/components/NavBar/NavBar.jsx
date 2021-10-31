import './NavBar.css'
import CartWidget from '../CartWidget';


export default function NavBar() {
    return (

        <div className="contenedorNav">

            <div><img className="logoNav" src="./assets/image/logo.png" alt="logoPizzeria" /></div>
            <div className="botonesNav">
              <button>Pizza</button>
              <button>Empanadas</button>
              <button>Tienda</button>
              <button>Nosotros</button>
            </div>

            <CartWidget />

        </div>
    )
}

