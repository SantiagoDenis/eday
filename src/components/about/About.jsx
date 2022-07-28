import './about.scss'
import imageH from '../../assets/1262.JPG'

const About = () => {
    return (
        <>
            <div className="aboutBanner">
                <div className="aboutBanner__data">
                    <div className="aboutBanner__text">
                        <h1 className='aboutBanner__text--sm'>Conoce nuestra</h1>
                        <h1 className='aboutBanner__text--lg'>Historia</h1>
                    </div>
                </div>
                <div className="aboutBanner__img">
                    <img src={`${imageH}`} alt="Foto de clientes contentos" />
                </div>
            </div>

            <div className="aboutInfo">
                <div className="aboutInfo__imgs">
                    <div className="aboutInfo__mainImg">

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
                <div className="values__sign values__sign--left"></div>
                <div className="values__vision">
                    <p>
                        Ser reconocidos como una empresa creativa, sustentable y socialmente responsable.
                    </p>
                </div>
                <div className="values__sign values__sign--middle"></div>
                <div className="values__value">
                    <p>
                        Honestidad, originalidad, creatividad, calidad, innovación, compromiso, responsablidad.
                    </p>
                </div>
                <div className="values__sign values__sign--right"></div>
            </div>

            <div className="greetings">
                <div className="greetings__text">
                    <p>Te ofrecemos con mucho cariño</p>
                    <h1>Detalles ecoamigables, estudio y taller creativo</h1>
                    <p style={{marginTop: '3%'}}>Conoce nuestros servicios:</p>
                </div>

                <div className="greetings__services">
                    <div className="greetings__service">
                        <div className="greetings__img"></div>
                        <p>Estudio Creativo</p>
                    </div>
                    <div className="greetings__service">
                        <div className="greetings__img"></div>
                        <p>Detalles eco amigables</p>
                    </div>
                    <div className="greetings__service">
                        <div className="greetings__img"></div>
                        <p>Showroom</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default About;