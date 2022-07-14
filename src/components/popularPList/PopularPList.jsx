import PopularP from "../popularP/PopularP";
import './popularPList.scss'

const PopularPList = () => {
    let popularProds = [
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
        <div className="popularContainer">
            <div className='popularContainer__list'>
                {
                    popularProds
                    ?
                        popularProds.map( (product) => {
                            return (
                                <div key={product.id} className="popularContainer__card">
                                    <PopularP product={product}/>
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
 
export default PopularPList;