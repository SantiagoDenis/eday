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
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse at rem impedit possimus earum ducimus omnis est harum vel placeat iste eos voluptate tempore provident labore, minima tenetur dolorum.',
            miniDesc: 'Descripcion pequeña ejemplo 1',
            type: 'Producto personalizado',
            price: `$12.00`
        },
        {
            id: 2,
            img: 'imagen 2',
            title: 'Titulo ejemplo 2',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse at rem impedit possimus earum ducimus omnis est harum vel placeat iste eos voluptate tempore provident labore, minima tenetur dolorum.',
            miniDesc: 'Descripcion pequeña ejemplo 2',
            type: 'Producto personalizado',
            price: `$12.00`
        },
        {
            id: 3,
            img: 'imagen3',
            title: 'Titulo ejemplo 3',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia esse at rem impedit possimus earum ducimus omnis est harum vel placeat iste eos voluptate tempore provident labore, minima tenetur dolorum.',
            miniDesc: 'Descripcion pequeña ejemplo3',
            type: 'Producto personalizado',
            price: `$12.00`
        }
    ]

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)
    useEffect(() => {
        let numId = parseInt(id)
        let productFinded = products.find((product) => product.id === numId)
        setProduct(productFinded)
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