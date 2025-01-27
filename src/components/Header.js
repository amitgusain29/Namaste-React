import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const { loggedInUser, password } = useContext(UserContext)

    // Subscribing to the store using a selector

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);



    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sticky top-0 z-10">
            <div className="logo-container">
                <img className="w-[80px] rounded-xl ml-3 my-2" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <button className="login px-4" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <li className="px-4 font-bold">{password}</li>
                </ul>
            </div>
        </div>

    );
}

export default Header;