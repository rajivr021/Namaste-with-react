import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const  {resInfo} = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const items = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2] ?.card?.card?.itemCards;

  if (!info || !items) return <p>Menu not available</p>;

  const { name = "Unknown", cuisines = [], costForTwoMessage = "" } = info;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p> {cuisines.join(", ")} - {costForTwoMessage} </p>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => {
          const { id, name, price, defaultPrice } = item.card.info;
          const finalPrice = (price ?? defaultPrice ?? 0) / 100;
          return (
            <li key={id}> {name} - ₹{finalPrice} </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
