import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg sticky top-0 z-10 border-b-2 border-orange-300 transition-all">
            <div className="logo-container flex items-center">
                <img className="w-[80px] rounded-xl ml-3 my-2 border-2 border-orange-300" src={LOGO_URL} />
                <span className="ml-4 text-2xl font-bold text-white flex items-center animate-bounce">Namaste React 🍽️</span>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 gap-2 items-center">
                    <li className="px-4 text-white font-semibold">Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li className="px-4 hover:text-orange-100 hover:scale-105 transition-transform"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-orange-100 hover:scale-105 transition-transform"><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:text-orange-100 hover:scale-105 transition-transform"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 hover:text-orange-100 hover:scale-105 transition-transform"><Link to="/contactform">ContactForm</Link></li>
                    <li className="px-4 font-bold text-xl text-white hover:text-yellow-200 hover:scale-110 transition-transform flex items-center">
                        <Link to="/cart" className="flex items-center gap-2">
                            <FaShoppingCart className="text-2xl" />
                            Cart({cartItems.length})
                        </Link>
                    </li>
                    <button className="login px-4 py-2 bg-white hover:bg-orange-200 text-orange-600 rounded-md font-semibold shadow transition-all ml-2 active:scale-95" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;