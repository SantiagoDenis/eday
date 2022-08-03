import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.jpg'
import Link from "./Link"


const NavbarDesktop = ({showDropdown, handleDropdown, closeDropdown}) => {

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <NavLink to={'/'} onClick={closeDropdown}>
                    <img src={`${logo}`} alt="logo" style={{marginLeft: '3%', width: '42%', height: '100%', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}/>
                </NavLink>
            </div>
            <div className="navbar__links">
                <NavLink to={'/'} onClick={closeDropdown}>
                    <Link name={'Inicio'} />
                    
                </NavLink>
                <div className="link" onClick={handleDropdown}>
                    {
                 
                            !showDropdown
                            ?
                            <>
                                <Link name={'Productos'} /><Icon icon="ic:outline-arrow-drop-down" style={{width: '17px', height: '17px'}} />
                            </>
                            :
                            <>
                                <Link name={'Productos'} /><Icon icon="ic:outline-arrow-drop-up" style={{width: '17px', height: '17px'}} />
                            </>
                    }

                </div>
                    {
                        showDropdown
                        &&
                        <div className="dropdown">
                            <NavLink to={'categoria/productos-ecoamigables'} onClick={handleDropdown}>
                                Productos Ecoamigables
                            </NavLink>
                            <NavLink to={'categoria/desayunos-personalizados'} onClick={handleDropdown}>
                                Desayunos Personalizados
                            </NavLink>
                            <NavLink to={'categoria/detalles-express'} onClick={handleDropdown}>
                                Detalles Express
                            </NavLink>
                            <NavLink to={'categoria/papeleria-y-packaging'} onClick={handleDropdown}>
                                Papelería y packaging
                            </NavLink>
                            <NavLink to={'categoria/personalizacion-de-souvenir'} onClick={handleDropdown}>
                                Personalización de Souvenir       
                            </NavLink>
                            <NavLink to={'categoria/asesoria-de-marketing'} onClick={handleDropdown}>
                                Asesoría de marketing        
                            </NavLink>
                        </div>
                    }
                    
                <NavLink to={'productos-populares'} onClick={closeDropdown}>
                    <Link name={'Productos Populares'} />
                </NavLink>
                <NavLink to={'estudio-creativo'} onClick={closeDropdown}>
                    <Link name={'Estudio Creativo'} />
                </NavLink>
                <NavLink to={'sobre-nosotros'} onClick={closeDropdown}>
                    <Link name={'Quienes Somos'} />
                </NavLink>
                <NavLink to={'contacto'} onClick={closeDropdown}>
                    <Link name={'Contactanos'} />         
                </NavLink>
            </div>
            <div className="navbar__socials">
                <a href="https://www.instagram.com/edaydelivery/?hl=es">
                    <Icon className="navbar__icon" icon="bi:instagram"/>
                </a>
                <a href="https://www.facebook.com/edaydelivery">
                    <Icon className="navbar__icon" icon="bi:facebook" />
                </a>
            </div>
        </div>
    );
}
 
export default NavbarDesktop;