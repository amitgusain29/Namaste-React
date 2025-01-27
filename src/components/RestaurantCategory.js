import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {


    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-8 rounded-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {showItems && <ItemList items={data?.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;