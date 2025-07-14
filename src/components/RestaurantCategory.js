import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="mb-4">
            <div className="w-full bg-white shadow-lg border border-orange-200 p-4 mx-auto rounded-xl">
                <div className="flex justify-between cursor-pointer items-center" onClick={handleClick}>
                    <span className="font-bold text-lg text-orange-600">{data?.title} <span className="text-orange-400">({data?.itemCards?.length})</span></span>
                    <span className="text-orange-500 text-xl">{showItems ? '▲' : '▼'}</span>
                </div>
                <div>
                    {showItems && <ItemList items={data?.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;