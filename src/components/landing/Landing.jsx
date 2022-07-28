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
                        <h1>Productos <br/> Ecoamigables</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text--right">
                        <h1>Desayunos <br/> Personalizados</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn--right">
                        <button>Ver productos</button>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Detalles <br/> Express</h1>
                        <p>Lorem ipsum dolor </p>
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