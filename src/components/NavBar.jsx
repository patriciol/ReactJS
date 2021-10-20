import '../NavBar.css'
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';


export default function NavBar() {
    return (

        <div className="contenedor">

            <div><h5 className="titulo">Acuarelas</h5></div>
            <div>
                <Button variant="primary">Inicio</Button>{' '}
                <Button variant="primary">Nosotros</Button>{' '}
                <Button variant="primary">Cuadros</Button>{' '}
                <Button variant="primary">Locales</Button>{' '}
                <Button variant="primary">Contacto</Button>{' '}
            </div>

            <CartWidget />

        </div>
    )
}

