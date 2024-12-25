import React from "react";
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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="xyz" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src="xyz" />
            <h4>{name}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>${costForTwo / 100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const resList = {}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    )
                })}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
