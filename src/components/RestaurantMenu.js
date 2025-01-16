import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info
    const mainCard = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const itemCards = mainCard?.itemCards
    const title = mainCard?.title

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h3>{avgRating}</h3>
            <h2>Menu</h2>
            <h2>{title}</h2>

            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        <p>{item.card.info.name} - {"₹"}
                            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
