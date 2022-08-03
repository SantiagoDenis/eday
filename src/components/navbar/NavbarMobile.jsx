import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.jpg'
import Link from "./Link"


const NavbarMobile = ({open, closeOpen, handleClick, showDropdown, handleDropdown }) => {
    return (
        <div className="navbarMobile">
            <div className="navbarMobile__socials">
                <a href="https://www.instagram.com/edaydelivery/?hl=es">
                    <Icon className="navbarMobile__icon" icon="bi:instagram" color="#000"/>
                </a>
                <a href="https://www.facebook.com/edaydelivery">
                    <Icon className="navbarMobile__icon" icon="bi:facebook" color="#000" />
                </a>
            </div>
            <div className="navbarMobile__logo">
                <img src={`${logo}`} alt="logo"/>

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
                    <div className={`link ${showDropdown && 'mobileLink__clicked'}`} onClick={() => {handleDropdown()}}>

                        {
                    
                            !showDropdown
                            ?
                            <>
                                <Link name={'Productos'} /><Icon icon="gridicons:dropdown" rotate={3} style={{width: '17px', height: '17px'}} />
                            </>
                            :
                            <>
                                <Link name={'Productos'} /><Icon icon="gridicons:dropdown" rotate={1} style={{width: '17px', height: '17px'}}  />
                            </>
                        }
                    </div>

                    {
                        showDropdown
                        &&
                        <div className="mobileDropdown">
                            <NavLink to={'categoria/productos-ecoamigables'} onClick={closeOpen}>
                                Productos Ecoamigables
                            </NavLink>
                            <NavLink to={'categoria/desayunos-personalizados'} onClick={closeOpen}>
                                Desayunos Personalizados
                            </NavLink>
                            <NavLink to={'categoria/detalles-express'} onClick={closeOpen}>
                                Detalles Express
                            </NavLink>
                            <NavLink to={'categoria/papeleria-y-packaging'} onClick={closeOpen}>
                                Papelería y packaging
                            </NavLink>
                            <NavLink to={'categoria/personalizacion-de-souvenir'} onClick={closeOpen}>
                                Personalización de Souvenir       
                            </NavLink>
                            <NavLink to={'categoria/asesoria-de-marketing'} onClick={closeOpen}>
                                Asesoría de marketing        
                            </NavLink>
                        </div>
                    }
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