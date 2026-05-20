import { NavLink } from "react-router-dom"
import classes from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <NavLink to='/' className={({isActive}) =>isActive ? classes.active : classes.link}>Dino</NavLink>
        </nav>
    )

}

export default NavBar