import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Hello World</span>

const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX😎
    </h1>
);

const Title = () => (
    <div>
        <h2 className="title">Hello Title</h2>
    </div>
)

const number = 1000;

const HeadingComponent3 = () => (
    <div id="container">
        <h2>{number}</h2>
        <h2>{100 + 200}</h2>
        {console.log("hello Amit")}
        {heading}
        {elem}
        <Title />
        <Title />
        {/* or we can use <Title></Title> both are same we can write how many times we want */}
        <Title></Title>
        {Title()}
        {/* or we can call a function as well */}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

// Even if any API passes some malicious data into your code JSX will escape it or sanitize it, Any data which is coming inside the curly braces it won't blindly run it, it will sanitize it and then pass it. It prevents cross-site scripting attacks.


const rootfirst = ReactDOM.createRoot(document.getElementById("root"))

rootfirst.render(<HeadingComponent3 />)

//

import { Link } from "react-router-dom";

// Header.js
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="xyz" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link>Cart</Link></li>
                    <button className="btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}


// Restaurant.js
const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={xyz + cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>${costForTwo / 100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="shimmer-cards"></div>
            <div className="shimmer-cards"></div>
            <div className="shimmer-cards"></div>
        </div>
    )
}

import { useState, useEffect } from "react";
import Shimmer from "../../src/components/Shimmer";
import { createBrowserRouter } from "react-router-dom";
// Body.js

const Body = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("...")

        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[2])
        setFilteredRestaurant(json?.data?.cards[2])
    }


    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {
                        const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRestaurant(filteredRestaurant)

                    }}></button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = ListOfRestaurants.filter((res) => {
                        res.data.avgRating > 4
                    });
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => {
                    return (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>
                    )
                })}
            </div>
        </div>
    )
}

// Error

import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err);
    return (
        <div>
            <h1>Opps!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    )
}
// RestaurantMenu
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, [])

    if (resInfo === null) return <Shimmer />;

    const fetchMenu = async () => {
        const data = await fetch("nhhe")
        const json = await data.json()
        console.log(json);
        setResInfo(json.data)
    }

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info || {};
    const fallbackCard = mainCard?.categories?.[0];

    const itemCards = mainCard?.itemCards || fallbackCard?.itemCards;
    const title = mainCard?.title || fallbackCard?.title;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")} - {costForTwoMessage}</h2>
            <h2>{avgRating}</h2>
            <h1>Menu</h1>
            <ul>
                {itemCards?.map((item) => {
                    <li key={item.card.info.id}>
                        <p>{item.card.info.name} - {"₹"}
                            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;

import User from "../../src/components/User";
import UserClass from "../../src/components/UserClass";
class About extends React.Component {
    constructor(props) {
        super(props)

        console.log("Parent Constructor");

    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
         
        return (
            <div>
                <h1>About</h1>
                <h1>This is Namaste React Web Series</h1>
                <User name={"Amit Gusain(function)"} location={"Dehradun(function)"} />
                <UserClass name={"Amit Gusain(Class)"} location={"Mumbai(Class)"} />
            </div >
        )
    }
}

// User

import { useState } from "react";


const User = ({ name, location }) => {


    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {name}</h2>
            <button onClick={() => {
                setCount(count + 1)
                setCount2(count2 + 1)
            }}>
                Count Increase
            </button>
            <h3>Location: {location}</h3>
            <h4>Contact: @amitgusain29</h4>
        </div>
    )
};

// UserClass

class About extends React.Component {
    constructor(props) {
        super(props)

        console.log("Parent Constructor");

    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
         
        return (
            <div>
                <h1>About</h1>
                <h1>This is Namaste React Web Series</h1>
                <User name={"Amit Gusain(function)"} location={"Dehradun(function)"} />
                <UserClass name={"Amit Gusain(Class)"} location={"Mumbai(Class)"} />
            </div >
        )
    }
}


// AppLayout

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: "<AppLayout/>",
        children: [
            {
                path: "/",
                element: "<Body/>",
            },
            {
                path: "/about",
                element: "<About/>",
            },
            {
                path: "/contact",
                element: "<Contact/>",
            },
            {
                path: "/restaurants/:resId",
                element: "<RestaurantMenu/>"
            }
        ],
        errorElement: "<Error/>",
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

