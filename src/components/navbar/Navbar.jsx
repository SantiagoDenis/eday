
import './navbar.scss'
import NavbarDesktop from "./NabvarDesktop"
import NavbarMobile from "./NavbarMobile"
import { useState } from "react"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = () => {
        setOpen(prevOpen => !prevOpen)
    }
    const handleDropdown = () => {
        setShowDropdown(prevDropdown => !prevDropdown)
    }
    const closeOpen = () => {
        setOpen(false)
    }
    const closeDropdown = () => {
        setShowDropdown(false)
    }
    

    return (
        <>
            <NavbarDesktop showDropdown={showDropdown} handleDropdown={handleDropdown} closeDropdown={closeDropdown}/>
            <NavbarMobile open={open} closeOpen={closeOpen} handleClick={handleClick} showDropdown={showDropdown} handleDropdown={handleDropdown} />
        </>
    )
}

export default Navbar