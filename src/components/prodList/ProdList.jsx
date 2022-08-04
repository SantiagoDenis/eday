import './prodList.scss'
import Product from '../product/Product';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductList = () => {

    const {categoria} = useParams()

    const [items, setItems] = useState([])

    useEffect( () => {
        const db = getFirestore()

        const queryCollection = collection(db, 'items')

        if (categoria) {
            const queryCollectionFiltered = query(queryCollection, where('categoria', '==', categoria))
            getDocs(queryCollectionFiltered)
            .then(response => setItems(response.docs.map(item => {
                return {id: item.id,
                    ...item.data()
                }
            }))
            )
            .catch(err => console.log(err))
            //There is no finally setting a loader to false because that loading state is in the item list childrens
            
        } else {

            getDocs(queryCollection)
            .then(response => setItems(response.docs.map(item => {
                                        return {id: item.id,
                                            ...item.data()
                                        }
            }))
            )
            .catch(err => console.log(err))
        }
    }, [categoria])


    return (
        <div className="productContainer">
            <div className='productContainer__list'>
                {
                    items
                    ?
                        items.map( (item) => {
                            return (
                                <div key={item.id} className="productContainer__card">
                                    <Product product={item}/>
                                </div>
                            )
                        })
                    : 
                        <div className='loader'>
                            <h1>Loading</h1>
                        </div>
                }
            </div>
        </div> 
    );
}
 
export default ProductList;