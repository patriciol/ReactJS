import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <div className="contenedorNav">
            <div><Link to={'/'}><img className="logoNav" src="../assets/image/FotoCumbre.png" alt="logoPizzeria" /></ Link></div>
            <div className="botonesNav">
                <Link to={'/'}><button className="btnNav" >Todos</button></ Link>
                <Link to={'/categoria/pizza'}><button className="btnNav">Pizzas</button></ Link>
                <Link to={'/categoria/empanada'}><button className="btnNav">Empanadas</button></ Link>
            </div>
            <CartWidget />
        </div>
    )
}