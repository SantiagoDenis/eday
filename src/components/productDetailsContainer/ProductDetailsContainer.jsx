import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../productDetails/ProductDetails';
import './productDetailsContainer.scss'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ProductDetailsContainer = () => {


    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)

    useEffect( () => {

        const db = getFirestore()

        const queryDoc = doc(db, 'items', id)

        getDoc(queryDoc)
        .then(response => setProduct({id: response.id, ...response.data()}))
        .catch(err => console.log(err))
        .finally(setLoad(false))
    }, [])
    
    return (
        
            !load
            ? 
                <ProductDetails product={product}/>
            :
                <div className="loader">
                    <h1>Cargando contenido</h1>
                </div>

        
    );
}
 
export default ProductDetailsContainer;