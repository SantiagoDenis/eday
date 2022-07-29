import { Icon } from "@iconify/react"
import './navbar.scss'
import { NavLink } from "react-router-dom"
import NavbarDesktop from "./NabvarDesktop"
import NavbarMobile from "./NavbarMobile"
import { useState } from "react"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <>
            <NavbarDesktop/>
            <NavbarMobile open={open} handleClick={handleClick}/>
        </>
    )
}

export default Navbar