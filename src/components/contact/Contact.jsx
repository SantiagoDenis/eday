import './contact.scss'
import {Icon} from '@iconify/react'
import image from '../../assets/8734.jpg'


const Contact = () => {
    return (
        <>
            <div className="contactData">
                <div className="contactData__info">
                    <div className="contactData__text">
                        <h1>Datos de Contacto</h1>
                        <div className="contactData_icons">
                            <a href='https://goo.gl/maps/K51twpZuaEjupHCU8' className="contactData_icon">
                                <Icon icon="ep:location"/>
                                <p>&nbsp; &nbsp; &nbsp; Calle Sucre N°1290 (Taller <br /> &nbsp; &nbsp; &nbsp; Creativo), Sullana, Piura</p>
                            </a>
                            <div className="contactData_icon">
                                <Icon icon="bi:telephone-plus-fill"/>
                                <p>&nbsp; &nbsp; &nbsp; +51-939731510 (Pedidos) <br />
                    &nbsp; &nbsp; &nbsp; +51-939731514 (Estudio Creativo)
                                </p>
                            </div>
                            <a href='mailto:edaydelivery@gmail.com' className="contactData_icon">
                                <Icon icon="mdi:gmail"/>
                                <p>&nbsp; &nbsp; &nbsp; edaydelivery@gmail.com</p>
                            </a>
                            <a href='https://wa.me/51939731510?text=¡Hola! Estoy interesado en contactarte. Mi motivo es:' className="contactData_icon">
                                <Icon icon="akar-icons:whatsapp-fill"/>
                                <p>&nbsp; &nbsp; &nbsp; +51 939 731 510</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contactData__img">
                    <img src={`${image}`} alt="imagen de clientes felices" />
                </div>
            </div>

            <div className="location">
                <h1>GPS Navegación</h1>
                <div className="location__map">
                    <iframe title='Map' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Sucre%201290,%20Sullana,%20Per%C3%BA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>

            <div className="communications">
                <div className="communications__column communications__column--left">
                    <h1>Lorem Ipsum dolor</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nam sit aspernatur saepe iure vitae, porro in, facere aperiam assumenda minus fugiat similique veritatis soluta suscipit ullam ad eaque nesciunt!</p>
                </div>
                <div className="communications__column communications__column--right">
                    <h1>Preguntas Generales</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nam sit aspernatur saepe iure vitae, porro in, facere aperiam assumenda minus fugiat similique veritatis soluta suscipit ullam ad eaque nesciunt!</p>
                </div>
            </div>
        </>
    );
}
 
export default Contact;