import "./Header.css"
import {Link} from 'react-router-dom'
import logo from "./assets/LittleLemonLogo.png"

function Header() {
    return(
        <header className='NavBarContainer'>
            <img src={logo} alt="Little Lemon logo" width={214}/>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">ABOUT</Link></li>
                    <li><Link to="/">MENU</Link></li>
                    <li><Link to="/booking">RESERVATIONS</Link></li>
                    <li><Link to="/">ORDER ONLINE</Link></li>
                    <li><Link to="/">LOG IN</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;