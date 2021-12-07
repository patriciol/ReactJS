import React from 'react'
import { useCartContext } from '../CarContext/CarContext'
import { useState } from 'react'
import CartItem from '../CartItem/CartItem'
import './CartList.css'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../Services/getFirestore'
import swal from 'sweetalert';
import { Modal, ModalHeader, Button, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap'

function CartList() {

    const { cartList, precioTotal, clear } = useCartContext();
    const [userData, setUserData] = useState({ name: "", mail: "", telefono: "" })
    const [Formulario, setFormulario] = useState(false)

    const handleForm = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }


    const abrirForm = () => {
        setFormulario(!Formulario)
    }

    const actualizarStock = (id, cant) => {
        getFirestore().collection('items').doc(id).update({ stock: cant })
    }

    const generarOrden = (e) => {
        e.preventDefault()

        if (userData.name === "" || userData.telefono === "" || userData.mail === "") {
            swal("Error!", "Formulario incompleto", "error");
        }
        else {
            let orden = {}
            orden.buyer = userData;
            orden.total = precioTotal()
            orden.items = cartList.map(item => {
                const id = item.detalle.id;
                const nombre = item.detalle.nombre;
                const precio = item.detalle.precio * item.cantidad;
                const cantActualizar = item.detalle.stock - item.cantidad
                actualizarStock(id, cantActualizar)
                return { id, nombre, precio }
            })

            const dataBase = getFirestore()

            dataBase.collection("orders").add(orden)
                .then(response => swal({
                    title: "Compra realizada",
                    text: "Id de compra: " + response.id,
                    icon: "success",
                    button: "Continuar",
                }))
                .catch(error => swal({
                    title: "No se pudo realizar compra",
                    text: "Detalle: " + error,
                    icon: "error",
                    button: "Continuar",
                }))
                .finally(() => clear())
            setFormulario(!Formulario)
        }
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
                <Modal isOpen={Formulario} >
                    <ModalHeader >Información de Compra</ModalHeader>
                    <ModalBody>
                        <FormGroup onChange={handleForm}>

                            <Label className="labelForm" for="name">Nombre:</Label>
                            <Input className="inputForm" type="text" name="name" defaultValue={userData.name} placeholder="Nombre" />
                            <Label className="labelForm" for="mail">Mail:</Label>
                            <Input className="inputForm" type="email" name="mail" defaultValue={userData.mail} placeholder="Mail" />
                            <Label className="labelForm" for="telefono">Telefono:</Label>
                            <Input className="inputForm" type="text" name="telefono" defaultValue={userData.telefono} placeholder="Telefono" />

                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>

                        <Button className="btnCart" color="danger" size="sm" onClick={abrirForm}>Cancelar</Button>
                        <Button className="btnCart" color="success" size="sm" onClick={generarOrden}>Comprar</Button>
                    </ModalFooter>

                </Modal>

                <div className="botonera">

                    {
                        (cartList.length > 0)
                            ? (<>
                                <h5>Total: {precioTotal()}$</h5>
                                <Button className="btnCart" color="danger" size="sm" onClick={clear}>Vaciar Carrito</Button>
                                <Button className="btnCart" color="success" size="sm" onClick={abrirForm}>Ir a Pagar</Button>
                            </>)
                            : <Link to="/"><button>Ir a la tienda</button></Link>
                    }
                </div>
            </div>
        </>

    )
}

export default CartList