import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"


const NavbarMobile = ({open, handleClick}) => {
    return (
        <div className="navbarMobile">
            <div className="navbarMobile__socials">
                <a href="#">
                    <Icon className="navbarMobile__icon" icon="bi:instagram" color="#000"/>
                </a>
                <a href="#">
                    <Icon className="navbarMobile__icon" icon="bi:facebook" color="#000" />
                </a>
            </div>
            <div className="navbarMobile__logo">
                imagen
            </div>
            <div className="navbarMobile__menu" onClick={handleClick}>
                {
                    !open
                    ?
                    <Icon icon="gg:menu-round" className="navbarMobile__menuIcon" />
                    :
                    <Icon icon="carbon:close-outline" className="navbarMobile__menuIcon" />
                }
            </div>
            {
                open
                &&
                <div className="navbarMobile__links">
                    <NavLink to={'/'} onClick={handleClick}>
                        Inicio
                    </NavLink>
                    <NavLink to={'productos'} onClick={handleClick}>
                        Productos
                    </NavLink>
                    <NavLink to={'productos-populares'} onClick={handleClick}>
                        Productos Populares
                    </NavLink>
                    <NavLink to={'estudio-creativo'} onClick={handleClick}>
                        Estudio Creativo
                    </NavLink>
                    <NavLink to={'sobre-nosotros'} onClick={handleClick}>
                        Quienes Somos
                    </NavLink>
                    <NavLink to={'contacto'} onClick={handleClick}>
                        Contactanos         
                    </NavLink>
                </div>
            }
        </div>
    );
}
 
export default NavbarMobile;