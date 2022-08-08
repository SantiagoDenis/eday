import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.jpg'
import Link from "./Link"


const NavbarMobile = ({open, closeOpen, handleClick, showDropdown, handleDropdown, closeDropdown }) => {
    const handleMenu = () => {
        handleClick()
        closeDropdown()
    }
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
            <div className="navbarMobile__menu" onClick={handleMenu}>
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
                            <NavLink to={'categoria/detalles-ecoamigables'} onClick={closeOpen}>
                                Detalles Ecoamigables
                            </NavLink>
                            <NavLink to={'categoria/desayunos-personalizados'} onClick={closeOpen}>
                                Desayunos Personalizados
                            </NavLink>
                            <NavLink to={'categoria/detalles-corporativos'} onClick={closeOpen}>
                                Detalles Express
                            </NavLink>
                            <NavLink to={'categoria/sublimados'} onClick={closeOpen}>
                                Sublimados
                            </NavLink>
                            <NavLink to={'categoria/souvenirs-personalizados'} onClick={closeOpen}>
                                Souvenirs Personalizados       
                            </NavLink>
                        </div>
                    }
{/*                     <NavLink to={'productos-populares'} onClick={handleClick}>
                        Productos Populares
                    </NavLink> */}
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