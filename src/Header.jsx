import "./Header.css"
import {Link} from 'react-router-dom'
import logo from "./assets/LittleLemonLogo.png"
import hamburguerIcon from "./assets/hamburguer.svg"
import xicon from "./assets/xIcon2.png"

function Header() {
    return(
        <header className='NavBarContainer'>
            <img src={logo} alt="Little Lemon logo" width={214}/>
            <nav>
                <input type="checkbox" id="sidebar-active"/>
                <label htmlFor="sidebar-active" className="open-sidebar-button">
                    <img src={hamburguerIcon} alt="burger icon image" />
                </label>

                <div className="links-container">
                    <label htmlFor="sidebar-active" className="close-sidebar-button">
                        <img src={xicon} alt="cross image" />
                    </label>
                    
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/">MENU</Link></li>
                        <li><Link to="/booking">RESERVATIONS</Link></li>
                        <li><Link to="/">ORDER ONLINE</Link></li>
                        <li><Link to="/">LOG IN</Link></li>
                    </ul>
                </div>

                <div className="desktop-links">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/">MENU</Link></li>
                        <li><Link to="/booking">RESERVATIONS</Link></li>
                        <li><Link to="/">ORDER ONLINE</Link></li>
                        <li><Link to="/">LOG IN</Link></li>
                    </ul>
                </div>
                
            </nav>
        </header>
    );
}

export default Header;