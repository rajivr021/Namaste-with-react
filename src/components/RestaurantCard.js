import { RatingIcon, RupeeIcon, CDN_URL } from "../utils/contants";

const RestaurantCard = ({ restaurant }) => {
  const { costForTwo, name, cuisines = [], cloudinaryImageId, avgRating, menu: menuItems = [], } = restaurant;
  const deliveryTime = restaurant?.sla?.deliveryTime ?? "N/A";

  return (
    <div className="res-card">
      <img className="food-img" alt={`${name} dish`} src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div className="TimeRating"> <span style={{ display: "flex" }}> <img className="rIcon" alt="star" src={RatingIcon} /> {avgRating} </span> <span>{deliveryTime} min</span> </div>
      <h5 id="desc">{cuisines.join(", ")}</h5>
      <h4 style={{ display: "flex" }}> <img className="rIcon" alt="rupee" src={RupeeIcon} /> {costForTwo} </h4>
    </div>
  );
};

export default RestaurantCard;
