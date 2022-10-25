import { NavLink } from "react-router-dom";
import logo from "../assets/fli-kix-logo.png"

function NavBar() {
    return (
        <nav>
            <ul>
                <img src={logo} />
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/design">Design Your Own</NavLink>
                <NavLink to="/gallery">NFK Gallery</NavLink>
                <NavLink to="/buy">Buy</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;