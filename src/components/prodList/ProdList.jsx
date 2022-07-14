import './prodList.scss'
import Product from '../product/Product';

const ProductList = () => {

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

    return (
        <div className="productContainer">
            <div className='productContainer__list'>
                {
                    products
                    ?
                        products.map( (product) => {
                            return (
                                <div key={product.id} className="productContainer__card">
                                    <Product product={product}/>
                                </div>
                            )
                        })
                    : 
                        <h1 className='loader'>Loading</h1>
                }
            </div>
        </div> 
    );
}
 
export default ProductList;