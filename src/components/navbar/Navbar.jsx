import { Icon } from "@iconify/react"
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                imagen
            </div>
            <div className="navbar__links">
                <a href="#">
                    Productos
                </a>
                <a href="#">
                    Productos Populares
                </a>
                <a href="#">
                    Estudio Creativo
                </a>
                <a href="#">
                    Quienes Somos
                </a>
                <a href="#">
                    Contactanos
                </a>         
            </div>
            <div className="navbar__socials">
                <a href="#">
                    <Icon className="navbar__icon" icon="bi:instagram" color="#000"/>
                </a>
                <a href="#">
                    <Icon className="navbar__icon" icon="bi:facebook" color="#000" />
                </a>
            </div>
        </div>
    )
}

export default Navbar