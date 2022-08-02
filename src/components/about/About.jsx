import './about.scss'
import imageH from '../../assets/1262.jpg'
import imageM from '../../assets/4.jpeg'
import showroom from '../../assets/6.jpg'
import creative from '../../assets/7.jpg'
import details from '../../assets/logo.jpg'
import values from '../../assets/values.svg'

const About = () => {
    return (
        <>
            <div className="aboutBanner">
                <div className="aboutBanner__data">
                    <div className="aboutBanner__text">
                        <h1 className='aboutBanner__text--sm'>Conoce nuestra</h1>
                        <h1 className='aboutBanner__text--lg'>Historia</h1>

                        <h1 className='aboutBanner__text--mobile'>Conoce nuestra historia</h1>
                    </div>
                </div>
                <div className="aboutBanner__img">
                    <img src={`${imageH}`} alt="Foto de clientes contentos" />
                </div>
            </div>

            <div className="aboutInfo">
                <div className="aboutInfo__imgs">
                    <div className="aboutInfo__mainImg">
                        <img src={`${imageM}`} alt="Imagen de los fundadores" />
                    </div>
                    <div className="aboutInfo__secImg">

                    </div>
                </div>
                <div className="aboutInfo__text">
                    <h1>¿Quienes somos?</h1>
                    <p>Eday.pe detalles eco amigables nace en octubre del 2018 en Sullana, Piura como una opción para ofrecer detalles eco amigables hechos totalmente de forma artesanal con indumentaria e insumos naturales, fomentando la reutilización.</p>
                    <br />
                    <p>Algunos de nuestros servicios son: detalles personalizados, regalitos, suvenires, además de diseño gráfico y asesoría en marketing.</p>
                    <p>Somos un emprendimiento responsable, ágil y confiable. Nos preocupamos por dar el moejor servicio a nuestros clientes, brindando una compra segura y cómoda.</p>

                    <h2>Fundadores</h2>
                    <p>Alan Mejía Camacho y Mayra Alemán del Castillo</p>
                    
                </div>
            </div>

            <div className="values">
                <div className="values__mission">
                    <p>
                        Fomentar el consumo eco amigable, trabajar con dedicación y creatividad los detalles eco amigables que ofrecemos, brindando atención personalizada para satisfacer las necesidades de nuestros clientes. 
                    </p>
                </div>
                <div className="values__sign values__sign--left">
                    <img src={`${values}`} alt="Mision" />
                </div>
                <div className="values__text values__text--left">Misión</div>
                <div className="values__vision">
                    <p>
                        Ser reconocidos como una empresa creativa, sustentable y socialmente responsable.
                    </p>
                </div>
                <div className="values__sign values__sign--middle">
                    <img src={`${values}`} alt="Vision" />
                </div>
                <div className="values__text values__text--middle">Visión</div>
                <div className="values__value">
                    <p>
                        Honestidad, originalidad, creatividad, calidad, innovación, compromiso, responsablidad.
                    </p>
                </div>
                <div className="values__sign values__sign--right">
                    <img src={`${values}`} alt="Valores" />
                </div>
                <div className="values__text values__text--right">Valores</div>
            </div>

            <div className="greetings">
                <div className="greetings__text">
                    <p>Te ofrecemos con mucho cariño</p>
                    <h1>Detalles ecoamigables, estudio y taller creativo</h1>
                    <p style={{marginTop: '3%', marginBottom: '5vh'}}>Conoce nuestros servicios:</p>
                </div>

                <div className="greetings__services">
                    <div className="greetings__service" style={{gridArea: 'creative'}}>
                        <div className="greetings__img" style={{height: '92%'}}>
                            <img src={`${creative}`} alt="logo" style={{width: '100%', height: '100%', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}/>

                        </div>
                        <p style={{margin: '0'}}>Estudio Creativo</p>
                    </div>
                    <div className="greetings__service" style={{gridArea: 'details'}}>
                        <div className="greetings__img">
                            <img src={`${details}`} alt="logo" style={{width: '100%', height: '100%', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}/>
 
                        </div>
                        <p >Detalles eco amigables</p>
                    </div>
                    <div className="greetings__service" style={{gridArea: 'showroom'}}>
                        <div className="greetings__img">
                            <img src={`${showroom}`} alt="logo" style={{width: '100%', height: '100%', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}/>
 
                        </div>
                        <p>Showroom</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default About;