import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(0)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating, totalRatings, totalRatingsString, areaName, sla } = resInfo?.cards[2]?.card?.card?.info
    const mainCard = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    console.log(categories);

    return (
        <div className=" px-[16.5rem] py-[5rem]">
            <div className="pb-7">
                <h1 className="font-bold text-2xl">{name}</h1>
            </div>
            <div className="mb-4 mx-0 border border-gray-200 p-5 w-[46rem] h-[12rem] rounded-3xl bg-white shadow-lg shadow-gray-300">
                <h1 className="font-bold text-md py-1">
                    {avgRating} {"(" + (totalRatings || totalRatingsString) + " ratings)"} - {costForTwoMessage}
                </h1>

                <h2 className="text-orange-500 font-semibold underline py-1 text-sm">{cuisines?.join(", ")}</h2>
                <h2>
                    <span className="font-bold text-black text-sm">Outlet</span>
                    <span className="font-semibold mx-1 text-gray-500 text-sm"> {areaName}</span>
                </h2>
                <h2>
                    <span className="font-bold text-sm">{sla?.minDeliveryTime + "-" + sla?.maxDeliveryTime}</span>
                    <span className="mx-1 font-bold text-sm">mins</span>
                </h2>
            </div>
            {/* categories accordions */}
            {/* controlled component */}
            {categories.map((category, index) => (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
            ))}
        </div>
    );
}

export default RestaurantMenu;
