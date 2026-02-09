import "./NotFoundComponent.css"
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <>
        <div className="ErrorMesage404">
            <h1> 404 Page Not Found </h1>
            <Link to="/">Go back</Link>
        </div>
    </>
  )
}

export default NotFoundComponent;
