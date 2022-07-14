import './product.scss'
import { Icon } from "@iconify/react";

const Product = ({product}) => {
    return ( 
        <>
            <div className="productCard">
                {/* <img src={`${product.img}`} alt={`Imagen del producto ${product.title}`} /> */}
                <div className="productCard__img"></div>
                <h2>{product.title}</h2>
                <small>{product.miniDesc}</small>
                <div className="productCard__btns">
                    <button>Más info</button>
                    <button>Pedir por WhatsApp</button>
                </div>
            </div>
            <div className="cardComplements">
                <div className="cardComplements__price">
                    <img className='cardComplements__sign' src="https://cdn-icons-png.flaticon.com/512/456/456114.png" />
                    <strong>{product.price}</strong>
                </div>
                <div className="cardComplements__heart">
                    <Icon className='cardComplements__icon' icon="akar-icons:heart" />
                </div>
            </div>
        </>
    );
}
 
export default Product;