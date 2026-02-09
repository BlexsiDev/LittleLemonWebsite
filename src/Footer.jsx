import "./Footer.css"
import footerLogo from "./assets/FooterLogo.png"
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="Footer">
            <img src={footerLogo} alt="logo" width={180} height={300}/>
            <div className="FooterNavBar">
                <nav>
                    <p>Doormat Navigation</p>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/'}>Menu</Link></li>
                        <li><Link to={'/booking'}>Reservations</Link></li>
                        <li><Link to={'/'}>Order Online</Link></li>
                        <li><Link to={'/'}>Log In</Link></li>
                    </ul>
                </nav>
                <nav>
                    <p>Contact</p>
                    <ul>
                        <li><Link to={'/'}>Address</Link></li>
                        <li><Link to={'/'}>Phone Number</Link></li>
                        <li><Link to={'/'}>Email</Link></li>
                    </ul>
                </nav>
                <nav>
                    <p>Social Media Links</p>
                    <ul>
                        <li><Link to={'/'}>Twitters</Link></li>
                        <li><Link to={'/'}>Instagram</Link></li>
                        <li><Link to={'/'}>Facebook</Link></li>
                        <li><Link to={'/'}>Threads</Link></li>
                        <li><Link to={'/'}>Youtube</Link></li>
                        <li><Link to={'/'}>TikTok</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;