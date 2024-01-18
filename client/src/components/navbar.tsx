import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";

export const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbar-title">
                My-Store
            </div>
            <div className="navbar-links">
                <Link to="/">shop</Link>
                <Link to="/purchased-items">Purchases</Link>
                <Link to="/checkout"><FontAwesomeIcon icon={faShoppingCart}/></Link>
            </div>
        </div>
    );
}