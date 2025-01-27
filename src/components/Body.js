import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local State Variable - Super Powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([])

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { loggedInUser, password, setUserName, setUserPassword } = useContext(UserContext)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://json.link/nn4SVIidee.json");

        const json = await data.json();

        console.log(json);

        // Optional Chaining
        setListOfRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }


    const onlineStatus = useOnlineStatus()

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline, Please Check your internet connection.
            </h1>
        )


    return (ListOfRestaurants || []).length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input placeholder="Search for restaurants" type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />

                    <button className="search-btn px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="m-4 px-1 p-4 flex items-center">
                    <button className="filter-btn px-2 py-1.5 bg-gray-100 rounded-lg border hover:border-black" onClick={() => {
                        const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating >= 4.3);
                        setFilteredRestaurant(filteredList)
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 px-1 p-4 flex items-center">
                    <label className="px-2">UserName:</label>
                    <input className="p-1 border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                    <label className="px-2">Password:</label>
                    <input className="p-1 border border-black" value={password} onChange={(e) => setUserPassword(e.target.value)} />

                </div>
            </div>

            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}</Link>
                ))}
            </div>
        </div>
    );
}


export default Body;