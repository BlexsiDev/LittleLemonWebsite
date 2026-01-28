import "./Header.css"
import logo from "./assets/LittleLemonLogo.png"

function Header() {
    return(
        <header className='NavBarContainer'>
            <img src={logo} alt="Little Lemon logo" width={214}/>
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">RESERVATIONS</a></li>
                    <li><a href="#">ORDER ONLINE</a></li>
                    <li><a href="#">LOG IN</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;