import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.jpg'


const NavbarDesktop = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <NavLink to={'/'}>
                    <img src={`${logo}`} alt="logo" style={{marginLeft: '3%', width: '42%', height: '100%', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}/>
                </NavLink>
            </div>
            <div className="navbar__links">
                <NavLink to={'/'}>
                    Inicio
                </NavLink>
                <NavLink to={'productos'}>
                    Productos
                </NavLink>
                <NavLink to={'productos-populares'}>
                    Productos Populares
                </NavLink>
                <NavLink to={'estudio-creativo'}>
                    Estudio Creativo
                </NavLink>
                <NavLink to={'sobre-nosotros'}>
                    Quienes Somos
                </NavLink>
                <NavLink to={'contacto'}>
                    Contactanos         
                </NavLink>
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
    );
}
 
export default NavbarDesktop;