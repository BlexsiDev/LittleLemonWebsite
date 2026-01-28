import "./Footer.css"
import footerLogo from "./assets/FooterLogo.png"

function Footer() {
    return(
        <footer className="Footer">
            <img src={footerLogo} alt="logo" width={180} height={300}/>
            <div className="FooterNavBar">
                <nav>
                    <p>Doormat Navigation</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </nav>
                <nav>
                    <p>Contact</p>
                    <ul>
                        <li><a href="#">Address</a></li>
                        <li><a href="#">Phone Number</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </nav>
                <nav>
                    <p>Social Media Links</p>
                    <ul>
                        <li><a href="#">Twitters</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Threads</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">TikTok</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;