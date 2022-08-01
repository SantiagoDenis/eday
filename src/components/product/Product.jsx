import './product.scss'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import liston from '../../assets/liston.svg'

const Product = ({product}) => {
    return ( 
        <>
            <Link to={`/producto/${product.id}`}>
            <div className="productCard">
                    {/* <img className="productCard__img" src={`${product.img}`} alt={`Imagen del producto ${product.title}`} /> */}
                    <div className="productCard__img"></div>
                    <h2>{product.title}</h2>
                    <small>{product.miniDesc}</small>
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