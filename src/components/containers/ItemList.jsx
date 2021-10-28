import React, {useState, useEffect} from 'react';
import Item from './Item';
import {getData} from "../../Services/getData.js";
import "./Estilos.css"


const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData
    .then(res => setData(res))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <div className="contenedorItemList">
      {
        loading 
        ? <h5>Cargando...</h5>
        : data.map(prod => <Item key={prod.id} detail={prod} />)
      }
    </div>
  )
}

export default ItemList