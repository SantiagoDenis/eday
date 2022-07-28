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
                            <div className="contactData_icon">
                                <Icon icon="ep:location" style={{width: '8%', height:'8%', marginRight: '2.5%', marginTop: '1%'}}/>
                                <p>Calle Sucre N 1290 (Taller Creativo), Sullana, Piura</p>
                            </div>
                            <div className="contactData_icon">
                                <Icon icon="mdi:gmail" style={{width: '8%', height:'8%', marginRight: '2.5%', marginTop: '1%'}}/>
                                <p>eday@gmail.com</p>
                            </div>
                            <div className="contactData_icon">
                                <Icon icon="bi:telephone-plus-fill" style={{width: '7%', height:'7%', marginRight: '3%', marginTop: '1.5%'}}/>
                                <p>+51-939731510 (Pedidos) <br />
                                +51-939731514 (Estudio Creativo)
                                </p>

                            </div>
                            <div className="contactData_icon">
                                <Icon icon="akar-icons:whatsapp-fill" style={{width: '7%', height:'7%', marginRight: '3%', marginTop: '1.8%'}}/>
                                <p>+51 939 731 510</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactData__img">
                    <img src={`${image}`} alt="imagen de clientes felices" />
                </div>
            </div>

            <div className="location">
                <h1>GPS Navegación</h1>
                <div className="location__map"></div>
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