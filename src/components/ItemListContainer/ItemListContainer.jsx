import {useState,useEffect} from 'react'
import { getData } from '../../Services/getData'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



function ItemListContainer() {

//Mock con Pomise
const [productos,setProductos]=useState([])
const [loading,setLoading]=useState(true)

useEffect(() => {
    getData
    .then(res => setProductos(res))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
}, [])


    return (
        <div className="contenedorItems">
        {loading ? <h5>Cargando...</h5> : <ItemList productos={productos}/>}             
        </div>
    )
}

export default ItemListContainer

