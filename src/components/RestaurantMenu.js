import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    const mainCard = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const fallbackCard = mainCard?.categories?.[0];

    const itemCards = mainCard?.itemCards || fallbackCard?.itemCards;
    const title = mainCard?.title || fallbackCard?.title;

    const IMAGE_BASE_URL = "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,w_508,h_320,c_fill/";

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <h2>{title}</h2> 
    
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        <div>
                            {item.card.info.name} - {"₹"}
                            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        <img
                            src={item.card.info.imageId}
                            width="100" // Adjust width as needed
                        />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
