import { Link } from "react-router-dom";

const ConfirmationComponent = () => {
  return (
    <>
      <h1>Succesfully reserved a table</h1>
      <p>Hope to see you!</p>
      <img src="#" alt="Confirmation check image" />
      <Link to={'/'}>
        <button>
            <img src="#" alt="Home Icon" />
        </button>
      </Link>
    </>
  )
}

export default ConfirmationComponent;