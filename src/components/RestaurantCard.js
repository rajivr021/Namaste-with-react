import { RatingIcon, RupeeIcon, CDN_URL } from "../utils/contants";

const RestaurantCard = ({ restaurant }) => {
  const { costForTwo, name, cuisines = [], cloudinaryImageId, avgRating, menu: menuItems = [], } = restaurant;
  const deliveryTime = restaurant?.sla?.deliveryTime ?? "N/A";

  return (
<div className="flex flex-col justify-between w-64 h-[350px] rounded-lg shadow-md overflow-hidden transform-gpu transition-all duration-200 ease-in-out  m-2 hover:-translate-y-1" >
      <img className=" w-full h-40 object-cover mb-3 " alt={`${name} dish`} src={CDN_URL + cloudinaryImageId} />
      <h3 className="pl-1 font-bold text-lg mb-[6px] text-[#333] ">{name}</h3>
      <div className="pl-1 flex justify-between items-center text-[0.85rem] mb-[6px] text-[#666]"> <span className="pl-1 flex" > <img className="pl-1 rIcon" alt="star" src={RatingIcon} /> {avgRating} </span>  </div>
      <h5 className="pl-1 text-[0.85rem] text-[#777] mb-2 " id="">{cuisines.join(", ")}</h5>
      <h4 className="pl-1 flex gap-1 text-[#444] font-medium items-center"> <img className="w-4 h4 mr-1 align-middle" alt="rupee" src={RupeeIcon} /> {costForTwo} <span className="flex justify-items-end ">{deliveryTime} min</span> </h4>
    </div>
  );
};

export default RestaurantCard;