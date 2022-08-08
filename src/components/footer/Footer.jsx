
import './footer.scss'
import { Icon } from '@iconify/react';
import logo from '../../assets/logo.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--flex">
                <div className="footer__logo">
                    <div className="footer__img">
                        <img src={`${logo}`} alt="logo" style={{maxHeight: '120px' , minWidth: '100px', width: '100%', height: '74%', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}/>
                    </div>
                </div>
                <div className="footer__body">
                    <div className="footer__text">
                        <h3>Quiénes somos</h3>
                        <p>Eday.pe detalles eco amigables nace en octubre del 2018 en Sullana, Piura como una opción para ofrecer detalles eco amigables hechos totalmente de forma artesanal con indumentaria e insumos naturales, fomentando la reutilización.</p>
                    </div>
                </div>
                <div className="footer__contactContainer">
                        <div className="footer__contact">
                            <h3>Contáctanos</h3>
                            <a href="https://wa.me/51939731510?text=¡Hola! Estoy interesado en contactarte. Mi motivo es:">
                                <Icon icon="bi:whatsapp" color="#000"/>
                                <p>+51 939 731 510</p>
                            </a>
                            <a href="mailto:edaydelivery@gmail.com">
                                <Icon icon="mdi:gmail" color='#000'/>
                                <p>edaydelivery@gmail.com</p>
                            </a>
                        </div>
                        <div className="footer__contact">
                            <h3>Siguenos en:</h3>
                            <a href="https://www.instagram.com/edaydelivery/?hl=es">
                                <Icon icon="bi:instagram" color="#000" />
                                <p>@edaydelivery</p>
                            </a>
                            <a href="https://www.facebook.com/edaydelivery">
                                <Icon icon="bi:facebook" color="#000" />
                                <p>edaydelivery</p>
                            </a>
                        </div>
                </div>
            </div>
            <div className="footer--block">
                <div className="footer__copyright">
                    <p>© Eday Delivery. CoderHouse 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
