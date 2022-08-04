import './landing.scss'
import image from '../../assets/1.png'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
        
            <div className="img1"></div>
            <img src={`${image}`} className="img2"></img>
            <div className="landing">
                {/* Estos divs simulan las imagenes */}
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1 className='landing__respTitle' style={{marginTop: '14%'}}>Detalles <br/> Ecoamigables</h1>
                        <p>Hechos con materiales e insumos naturales y sanos. Los puedes personalizar a tu gusto, según temática u ocasión. Incluye papelería de alta calidad, personalizable. </p>
                    </div>
                    <div className="landing__btn">
                            <Link to={'categoria/detalles-ecoamigables'}>
                                Ver productos
                            </Link>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text--right">
                        <h1 style={{marginTop: '14%'}}>Desayunos <br/> Personalizados</h1>
                        <p>Acompaña las mañanas de tu ser querido con nuestros desayunos personalizados. Incluye papelería de alta calidad, personalizable y activación.</p>
                    </div>
                    <div className="landing__btn--right">
                            <Link to={'categoria/desayunos-personalizados'}>
                                Ver productos
                            </Link>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Detalles <br/> Corporativos</h1>
                        <p>Detalles rápidos, creativos y económicos.</p>
                    </div>
                    <div className="landing__btn">
                            <Link to={'categoria/detalles-corporativos'}>
                                Ver productos
                            </Link>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text--right">
                        <h1>Sublimados</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn--right">
                            <Link to={'categoria/sublimados'}>
                                Ver productos
                            </Link>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Souvenirs Personalizados</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                            <Link to={'categoria/souvenirs-personalizados'}>
                                Ver productos
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing