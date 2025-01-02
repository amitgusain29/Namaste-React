import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // Local State Variable - Super Powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([])

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

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

    return (ListOfRestaurants || []).length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input placeholder="Search for restaurants and food" type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)

                    }} />
                    <button className="search-btn" onClick={() => {
                        const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating >= 4.3);
                    setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>

 
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
}


export default Body;