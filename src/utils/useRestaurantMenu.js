import { MenuRes_API } from "../utils/contants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMenu = async () => {
      try {
        const response = await fetch(MenuRes_API + resId);
        const json = await response.json();
        if (isMounted) {
          setResInfo(json);
        }
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    if (resId) fetchMenu();

    return () => {
      isMounted = false;
    };
  }, [resId]);

  return { resInfo };
};

export default useRestaurantMenu;
