import { useState } from "react";
import ItemList from "./ItemList";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data || {};

  const handleClicked = () => {
    setShowIndex();
  };

  return (
    <div className="">
      {/* Accordion hearder */}
      <div className="w-1/2 mx-auto my-4 bg-[#ffffff] m-4 p-4 cursor-pointer rounded-md shadow-md">
        <div className="flex justify-between" onClick={handleClicked}>
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span className="">
            {showItems ? <FaChevronDown /> : <FaChevronUp />}
          </span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
