import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State Variable - Super Powerful variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([])

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const hours = new Date().getHours();

    const message = (
        hours >= 5 && hours < 12 ? "Best Restaurants for Breakfast" :
            hours >= 12 && hours < 17 ? "Best Restaurants for Lunch" :
                "Best Restaurants for Dinner"
    );


    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
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


            <div className="restaurants">
                <h1>{message}</h1>
            </div>

            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}


export default Body;