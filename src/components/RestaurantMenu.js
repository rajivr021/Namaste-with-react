import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo } = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const items =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;

  // console.log(resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  if (!info || !items) return <p>Menu not available</p>;

  const { name = "Unknown", cuisines = [], costForTwoMessage = "" } = info;

  return (
    <div className="text-center overflow-y-scroll h-full pb-28">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>

      {categories.map((category,index)=><RestaurantCategory key={index} data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;
