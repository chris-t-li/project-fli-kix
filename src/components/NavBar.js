import logo from "../assets/fli-kix-logo.png"

function NavBar() {
    return (
        <nav>
            <ul>
                <img src={logo} />
                <li>Home</li>
                <li>Design Your Own</li>
                <li>NFK Gallery</li>
                <li>Buy</li>
            </ul>
        </nav>
    )
}

export default NavBar;