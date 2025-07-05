import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/contants";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handelAddItem=(item)=>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, imageId, ratings } =
          item?.card?.info;

        return (
          <div key={id} className="p-4 m-2 border-b border-gray-200">
            <div className="flex justify-between">
              <div className="w-3/4">
                <span className="flex font-bold text-base text-gray-800"> {name} </span>
                <span className="flex font-bold text-sm pt-1"> ₹{price ? price / 100 : "N/A"} </span>
                {ratings?.aggregatedRating?.rating && (
                  <span className="flex font-medium text-sm  pt-1">
                    <span className="text-green-900">
                      ★{ratings.aggregatedRating.rating}{" "}
                    </span>
                    ({ratings.aggregatedRating.ratingCountV2})
                  </span>
                )}
                <p className="text-left text-xs text-gray-500 pt-2"> {description} </p>
              </div>

              <div className="w-28 h-24 relative">
                <img src={CDN_URL + imageId} alt={name} className="w-full h-full object-cover rounded-md" />
                <button className="absolute bottom-[-9px] left-1/2 transform -translate-x-1/2 py-1 px-6 bg-black rounded-lg text-white font-bold text-xs border-2 shadow-lg"
                onClick={()=>handelAddItem(item)}>
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
