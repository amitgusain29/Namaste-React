import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    useEffect(() => {
        console.log("useEffect");
    }, [btnNameReact])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Cart</Link></li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;