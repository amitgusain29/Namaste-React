import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;


  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card mx-2 my-4 p-3 w-[230px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col justify-between">
      <img
        className="res-logo rounded-lg h-[150px] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

// Higher Order components

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 mx-4 px-1 py-0.5 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
