import './landing.scss'
import image from '../../assets/1.png'

const Landing = () => {
    return (
        <>
        
            <div className="img1"></div>
            <img src={`${image}`} className="img2"></img>
            <div className="landing">
                {/* Estos divs simulan las imagenes */}
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1 style={{marginTop: '14%'}}>Productos <br/> Ecoamigables</h1>
                        <p>Hechos con materiales e insumos naturales y sanos. Los puedes personalizar a tu gusto, según temática u ocasión. Incluye papelería de alta calidad, personalizable. </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text--right">
                        <h1 style={{marginTop: '14%'}}>Desayunos <br/> Personalizados</h1>
                        <p>Acompaña las mañanas de tu ser querido con nuestros desayunos personalizados. Incluye papelería de alta calidad, personalizable y activación.</p>
                    </div>
                    <div className="landing__btn--right">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Detalles <br/> Express</h1>
                        <p>Detalles rápidos, creativos y económicos.</p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text--right">
                        <h1>Papelería <br/> y Packaging</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn--right">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Personalización <br/> de Souvenires</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text--right">
                        <h1>Asesoría <br/> de Márketing</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn--right">
                        <button>Ver productos</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing