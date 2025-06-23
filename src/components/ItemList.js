import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../slices/cartSlice";

const ItemList = ({ items, showAddButton = true, showRemoveButton = false }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    const handleRemoveItem = () => {
        dispatch(removeItem());
    };
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="p-2 py-4 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="w-9/12">
                        <div>
                            <span className="font-bold text-lg text-gray-700">
                                {item?.card?.info?.name}
                            </span>
                        </div>
                        <div>
                            <span className="font-bold">
                                ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
                            </span>
                        </div>
                        <div>
                            <span className="font-bold">
                                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "Veg" : "Non-Veg"}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-600 pt-2">
                                {item?.card?.info?.description?.length > 160
                                    ? item.card.info.description.substring(0, 157) + '...'
                                    : item.card.info.description}
                            </p>
                        </div>
                    </div>
                    <div className="relative w-3/12 pl-5 pr-1 py-3">
                        {item?.card?.info?.imageId && (
                            <img
                                className="w-full h-32 object-cover rounded-xl"
                                src={CDN_URL + item?.card?.info?.imageId}
                                alt="Item"
                            />
                        )}
                        {showAddButton && (<div className={`absolute ${item?.card?.info?.imageId ? 'bottom-0' : 'my-auto'} left-3.5 right-0 flex justify-center`}>
                            <button className="w-28 py-1.5 rounded-lg shadow-lg font-bold text-gray-500 text-md bg-white hover:bg-gray-300" onClick={() => handleAddItem(item)}>
                                ADD
                            </button>
                        </div>
                        )}
                        {showRemoveButton && (<div className={`absolute ${item?.card?.info?.imageId ? 'bottom-0' : 'my-auto'} left-3.5 right-0 flex justify-center`}>
                            <button className="w-28 py-1.5 rounded-lg shadow-lg font-bold text-white text-md bg-red-500 hover:bg-gray-300 hover:text-black" onClick={() => handleRemoveItem(item)}>
                                Remove
                            </button>
                        </div>
                        )}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemList;