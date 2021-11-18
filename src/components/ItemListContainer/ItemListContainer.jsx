import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../Services/getFirestore'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



function ItemListContainer() {

    //Mock con Pomise
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore()
        

        if(categoryId)
        {
            const dbQuery = db.collection('items').where('categoria','==',categoryId).get()

            
            dbQuery
            .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }
        else
        {

            const dbQuery = db.collection('items').orderBy("categoria", "desc").get()

            dbQuery
            .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }


        /*  if (categoryId) {
    
             getData
                 .then(res => setProductos(res.filter(prod => prod.categoria === categoryId)))
                 .catch(err => console.log(err))
                 .finally(() => setLoading(false))
    
         }
         else {
    
             getData
                 .then(res => setProductos(res))
                 .catch(err => console.log(err))
                 .finally(() => setLoading(false))
    
         } */

    }, [categoryId])




    return (

        <div className="contenedorItems">

            {loading ? <h5>Cargando...</h5> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer

