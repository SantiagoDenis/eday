import './productDetails.scss'


const ProductDetails = ({product}) => {
    return (
        <div className="details">
            <div className="details__imgs">
                <div className="details__imgs--lg">
                    <div className="img" style={{backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>

                </div>
                <div className="details__imgs--sm">
                    <div className="img" style={{backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                    <div className="img" style={{backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                </div>
            </div>
            <div className="details__info">
                <h1>{product.title}</h1>
                <h3>{product.type}</h3>
                <h2>{product.price}</h2>
                <h4>{product.desc ? 'Descripcion:' : ''}</h4>
                <p>{product.desc ? product.desc : ''}</p>
                <h4>Personalización del producto según:</h4>
                <p>Temática y ocasión</p>
                <p>*Consultar Disponibilidad</p>
                <a href={`https://wa.me/51939731510?text=¡Hola! Estoy interesado en el producto ${product.title}.`}>Comprar por WhatsApp</a>
            </div>
        </div>
    );
}
 
export default ProductDetails;