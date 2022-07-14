
import './footer.scss'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--flex">
                <div className="footer__logo">
                    <div className="footer__img">
                        imagen
                    </div>
                </div>
                <div className="footer__text">
                    <h3>Quienes somos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam et quibusdam adipisci quam voluptas neque vitae! Possimus minus porro, nostrum nesciunt cupiditate voluptatum voluptate! Veritatis eum sit quibusdam necessitatibus?</p>
                </div>
                <div className="footer__socials">
                    <div className="footer__contact">
                        <h3>Contáctanos</h3>
                        <a href="#">
                            <Icon icon="bi:whatsapp" color="#000"/>
                            <p>7555-4562</p>
                        </a>
                        <a href="#">
                            <Icon icon="mdi:gmail" color='#000'/>
                            <p>eday@gmail.com</p>
                        </a>
                    </div>
                    <div className="footer__contact">
                        <h3>Siguenos en:</h3>
                        <a href="#">
                            <Icon icon="bi:instagram" color="#000" />
                            <p>@edaydelivery</p>
                        </a>
                        <a href="#">
                            <Icon icon="bi:facebook" color="#000" />
                            <p>eday@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer--block">
                <div className="footer__copyright">
                    <small>© Eday Delivery. CoderHouse 2022</small>
                </div>
            </div>
        </div>
    )
}

export default Footer
