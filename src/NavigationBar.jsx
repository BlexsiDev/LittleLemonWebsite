import logo from "./assets/LittleLemonLogo.png"

function NavigationBar() {
    return(
        <>
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
        </>

    );
}

export default NavigationBar