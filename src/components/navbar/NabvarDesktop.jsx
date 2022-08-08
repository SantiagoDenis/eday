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
                            <NavLink to={'categoria/detalles-ecoamigables'} onClick={handleDropdown}>
                                Detalles Ecoamigables
                            </NavLink>
                            <NavLink to={'categoria/desayunos-personalizados'} onClick={handleDropdown}>
                                Desayunos Personalizados
                            </NavLink>
                            <NavLink to={'categoria/detalles-corporativos'} onClick={handleDropdown}>
                                Detalles Express
                            </NavLink>
                            <NavLink to={'categoria/sublimados'} onClick={handleDropdown}>
                                Sublimados
                            </NavLink>
                            <NavLink to={'categoria/souvenirs-personalizados'} onClick={handleDropdown}>
                                Souvenirs Personalizados       
                            </NavLink>
                        </div>
                    }
                    
{/*                 <NavLink to={'productos-populares'} onClick={closeDropdown}>
                    <Link name={'Productos Populares'} />
                </NavLink> */}
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