import './product.scss'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import liston from '../../assets/liston.svg'

const Product = ({product}) => {
    console.log(product.img)
    return ( 
        <>
            <Link to={`/producto/${product.id}`}>
            <div className="productCard">
                    <div className="productCard__img" style={{backgroundImage: `url(${product.img})`}}></div>
                    <h2>{product.title}</h2>
                    <small>{product.miniDesc ? product.miniDesc : ''}</small>
                    <div className="productCard__btns">
                        <button>Pedir por WhatsApp</button>
                    </div>
            </div>
            </Link>
            <div className="cardComplements">
                <div className="cardComplements__price">
                    <img className='cardComplements__sign' src={`${liston}`} />
                    <strong>{product.price}</strong>
                </div>
            </div>
        </>
    );
}
 
export default Product;