import { NavLink } from "react-router-dom";
import logo from "../assets/fli-kix-logo-new.png"

function NavBar() {

    return (
        <nav>
            <ul>
                <img src={logo} alt="logo"/>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/design">Design Your Own</NavLink>
                <NavLink to="/gallery">NFK Gallery</NavLink>
                <NavLink to="/buy">Wallet: 1 ETH</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;