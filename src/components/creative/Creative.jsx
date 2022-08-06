import './creative.scss'
import image from '../../assets/5.png'

const Creative = () => {
    return (
        <div className='creative'>
            <div className="creative__banner">
                <img src={`${image}`} alt="Les traemos un nuevo servicio porque queremos estar mas cerca de ustedes para regalar amor" />
            </div>
            <div className="creative__title">
                <h1>Les traemos un nuevo servicio <br /> porque queremos estar <br /><strong>más cerca de ustedes <br /> para regalar amor</strong></h1>
            </div>
            <div className="creative__text">
                <p>Creamos y rediseñamos logos para tu empresa o negocio y personalizamos distintos artículos: tazas, tomatodos, cuadros, para reforzar la imagen de tu empresa o sorprender a tu ser querido.</p>
                <br />
                <p>Puedes solicitar una cotización a los números 939731510 y 939731514 o visítanos en nuestro showroom Calle Sucra N 1290 Sullana.</p>
                <br />
                <br />
                <h2>Te ofrecemos:</h2>
            </div>
            <div className="creative__columns">
                <ul>
                    <li>Diseño gráfico</li>
                    <li>Branding</li>
                    <li>Creación de logos</li>
                    <li>Piezas gráficas-digitales</li>
                </ul>
                <ul>
                    <li>Tarjetas de negocios</li>
                    <li>Flyers publicitarions</li>
                    <li>Banners</li>
                    <li>Gestión de redes sociales</li>
                </ul>
            </div>
        </div>
    )
}
 
export default Creative;