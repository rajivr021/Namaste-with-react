import ItemList from "./ItemList";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
const RestaurantCategory = (data) => {
  const { title, itemCards } = data?.data;
  return (
    <div className="">
      {/* Accordion hearder */}
      <div className="w-1/2 mx-auto my-4 bg-[#ffffff] m-4 p-4 cursor-pointer rounded-md shadow-md">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span className=""><FaChevronDown/></span>
        </div>
        <ItemList items={data.data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
