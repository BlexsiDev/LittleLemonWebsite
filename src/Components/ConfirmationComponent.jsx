import "./ConfirmationComponent.css"
import checkMark from "../assets/CheckMark.png"
import homeIcon from "../assets/home-icon.png"
import { Link } from "react-router-dom";

const ConfirmationComponent = () => {
  return (
    <>
      <section className="ConfirmationSection">
        <div className="ConfirmationCard">
          <img src={checkMark} alt="Confirmation check image" />
          <h1>Succesfully reserved a table</h1>
          <p>
            Thank you for reserving a table. <br/>
            See you soon!
          </p>
          <Link to={'/'}>
            <button>
                <img src={homeIcon} alt="Home Icon" id="homeIcon"/>
            </button>
          </Link>   
        </div>
      </section>
    </>
  )
}

export default ConfirmationComponent;