import './landing.scss'
import image from '../../assets/1.png'
import landing from '../../assets/landing.jpg'
import { Link } from 'react-router-dom'
import de from '../../assets/de.jpg'
import dc from '../../assets/dc.jpg'
import dp from '../../assets/dp.jpg'
import su from '../../assets/su.jpg'
import sv from '../../assets/sv.jpg'

const Landing = () => {
    return (
        <>
        
            <img src={`${landing}`} className="img1" alt='Landing illustation'></img>
            <img src={`${image}`} className="img2" alt='Landing illustation'></img>
            <div className="landing">
                {/* Estos divs simulan las imagenes */}
                <div className="landing__line">
                    <div className="landing__box landing__box--left">
                        <div className="landing__text">
                            <h1 style={{marginTop: '14%'}}>Detalles <br/> Ecoamigables</h1>
                            <p>Hechos con materiales e insumos naturales y sanos. Los puedes personalizar a tu gusto, según temática u ocasión. Incluye papelería de alta calidad, personalizable. </p>
                        </div>
                        <div className="landing__btn">
                                <Link to={'categoria/detalles-ecoamigables'}>
                                    Ver productos
                                </Link>
                        </div>
                    </div>
                    <div className="landing__image">
                    <img src={`${de}`} alt="Imagen de producto de landing" />                        
                    </div>
                </div>
                <div className="landing__line">
                    <div className="landing__image">
                        <img src={`${dp}`} alt="Imagen de producto de landing" />
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

                </div>
                <div className="landing__line">

                    <div className="landing__box landing__box--left">
                        <div className="landing__text">
                            <h1>Detalles <br/> Express</h1>
                            <p>Detalles rápidos, creativos y económicos.</p>
                        </div>
                        <div className="landing__btn">
                                <Link to={'categoria/detalles-corporativos'}>
                                    Ver productos
                                </Link>
                        </div>
                    </div>
                    <div className="landing__image">
                        <img src={`${dc}`} alt="Imagen de producto de landing" />
                    </div>
                </div>
                <div className="landing__line">
                    <div className="landing__image">
                        <img src={`${su}`} alt="Imagen de producto de landing" />
                    </div>
                    <div className="landing__box landing__box--right">
                        <div className="landing__text--right">
                            <h1>Sublimados</h1>
                            <p>Sublima lo que quieras: tazas, tomatodos, chops, etc, y llévalos a donde quieras. </p>
                        </div>
                        <div className="landing__btn--right">
                                <Link to={'categoria/sublimados'}>
                                    Ver productos
                                </Link>
                        </div>
                    </div>

                </div>
                <div className="landing__line">

                    <div className="landing__box landing__box--left">
                        <div className="landing__text">
                            <h1 style={{marginTop: '14%'}}>Souvenirs Personalizados</h1>
                            <p>Desde un pin para llevarlo con un elegante blazer o tu camiseta preferida hasta un imantado en tu refrigeradora para recordar a tus seres queridos, nuestros souvenirs personalizados le darán un toque diferente a esos momentos. </p>
                        </div>
                        <div className="landing__btn">
                                <Link to={'categoria/souvenirs-personalizados'}>
                                    Ver productos
                                </Link>
                        </div>
                    </div>
                    <div className="landing__image">
                        <img src={`${sv}`} alt="Imagen de producto de landing" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing