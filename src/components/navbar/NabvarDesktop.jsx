import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.jpg'
import Link from "./Link"


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
                    <Link name={'Inicio'} />
                    
                </NavLink>
                <NavLink to={'productos'}>
                    <Link name={'Productos'} />
                </NavLink>
                <NavLink to={'productos-populares'}>
                    <Link name={'Productos Populares'} />
                </NavLink>
                <NavLink to={'estudio-creativo'}>
                    <Link name={'Estudio Creativo'} />
                </NavLink>
                <NavLink to={'sobre-nosotros'}>
                    <Link name={'Quienes Somos'} />
                </NavLink>
                <NavLink to={'contacto'}>
                    <Link name={'Contactanos'} />         
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