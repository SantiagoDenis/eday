import './productDetails.scss'


const ProductDetails = ({product}) => {
    return (
        <div className="details">
            <div className="details__imgs">
                <div className="details__imgs--lg">
                    <div className="img"></div>
                </div>
                <div className="details__imgs--sm">
                    <div className="img"></div>
                    <div className="img"></div>
                </div>
            </div>
            <div className="details__info">
                <h1>{product.title}</h1>
                <h3>{product.type}</h3>
                <h2>{product.price}</h2>
                <h4>Descripción:</h4>
                <p>{product.desc}</p>
                <h4>Personalización del producto según:</h4>
                <p>Temática y ocasión</p>
                <p>*Consultar Disponibilidad</p>
                <button>Comprar por WhatsApp</button>
            </div>
        </div>
    );
}
 
export default ProductDetails;