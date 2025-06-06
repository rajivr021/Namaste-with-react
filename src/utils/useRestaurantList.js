import { useState, useEffect } from "react";
import { MENU_API } from "../utils/contants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(resList)
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(MENU_API);
      const json = await response.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const infoList = restaurants.map((r) => r.info);
      setResList(infoList);
      setAllRestaurants(infoList);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { resList, allRestaurants, setResList, loading };
};

export default useRestaurantList;
