import { Icon } from "@iconify/react";
import './popularP.scss'

const PopularP = ({product}) => {
    return (
        <>
        <div className="popularCard">
            {/* <img src={`${product.img}`} alt={`Imagen del producto ${product.title}`} /> */}
            <div className="popularCard__img"></div>
            <div className="popularCard__info">
                <div className="popularCard__text">
                    <h2>{product.title}</h2>
                    <small>{product.miniDesc}</small>
                </div>
                <div className="popularCard__btns">
                    <button>Más info</button>
                    <button>Pedir por WhatsApp</button>
                </div>
            </div>
        </div>
        <div className="popularCardComplements">
            <div className="popularCardComplements__price">
                <img className='popularCardComplements__sign' src="https://cdn-icons-png.flaticon.com/512/456/456114.png" />
                <strong>{product.price}</strong>
            </div>
            <div className="popularCardComplements__heart">
                <Icon className='popularCardComplements__icon' icon="akar-icons:heart" />
            </div>
        </div>
    </>
    );
}
 
export default PopularP;