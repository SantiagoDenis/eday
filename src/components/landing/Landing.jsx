import './landing.css'

const Landing = () => {
    return (
        <>
        
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="landing">
                {/* Estos divs simulan las imagenes */}
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Productos Ecoamigables</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text">
                        <h1>Desayunos Personalizados</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Detalles Express</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text">
                        <h1>Papelería y Packaging</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="landing__box landing__box--left">
                    <div className="landing__text">
                        <h1>Personalización de Souvenires</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver más</button>
                    </div>
                </div>
                <div className="landing__box landing__box--right">
                    <div className="landing__text">
                        <h1>Asesoría de Márketing</h1>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div className="landing__btn">
                        <button>Ver más</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing