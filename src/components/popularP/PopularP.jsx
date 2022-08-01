import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import './popularP.scss'
import liston from '../../assets/liston.svg'

const PopularP = ({product}) => {
    return (
        <>
        <Link to={`/producto/${product.id}`}>
            <div className="popularCard">
                {/* <img src={`${product.img}`} alt={`Imagen del producto ${product.title}`} /> */}
                <div className="popularCard__img"></div>
                <div className="popularCard__info">
                    <div className="popularCard__text">
                        <h2>{product.title}</h2>
                        <small>{product.miniDesc}</small>
                    </div>
                    <div className="popularCard__btns">
                        <button>Pedir por WhatsApp</button>
                    </div>
                </div>
            </div>
        </Link>
        <div className="popularCardComplements">
            <div className="popularCardComplements__price">
                <img className='popularCardComplements__sign' src={`${liston}`} />
                <strong>{product.price}</strong>
            </div>
        </div>
    </>
    );
}
 
export default PopularP;