import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../productDetails/ProductDetails';
import './productDetailsContainer.scss'

const ProductDetailsContainer = () => {
    let products = [
        {
            id: 1,
            img: 'imagen 1',
            title: 'Titulo ejemplo 1',
            miniDesc: 'Descripcion pequeña ejemplo 1',
            price: `$12.00`
        },
        {
            id: 2,
            img: 'imagen 2',
            title: 'Titulo ejemplo 2',
            miniDesc: 'Descripcion pequeña ejemplo 2',
            price: `$12.00`
        },
        {
            id: 3,
            img: 'imagen3',
            title: 'Titulo ejemplo 3',
            miniDesc: 'Descripcion pequeña ejemplo3',
            price: `$12.00`
        }
    ]

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const productFinded = products.find(product.id === id)
        setProduct(productFinded)
    }, [])
    
    return (
        
            !load
            ? 
                <ProductDetails film={product}/>
            :
                <div className="loader">
                    <h1>Cargando contenido</h1>
                </div>

        
    );
}
 
export default ProductDetailsContainer;