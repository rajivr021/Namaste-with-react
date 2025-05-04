import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { fetchRestaurants(); }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurants = json?.data?.cards ?.find( (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const infoList = restaurants.map((r) => r.info);

      setResList(infoList);
      setAllRestaurants(infoList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setResList(filtered);
  };

  const showAll = () => setResList(allRestaurants);

  const showTopRated = () => {
    const filtered = allRestaurants.filter((res) => res.avgRating > 4.5);
    setResList(filtered);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") { showAll(); }
  };

  if (allRestaurants.length === 0) { return <Shimmer />; }

  return (
    <div className="Body">
      <div className="fliter-btn">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants or dishes"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="Ratingbtn Allbtn" onClick={showAll}> All </button>
        <button className="Ratingbtn" onClick={showTopRated}> Rating 4.5+ </button>
      </div>

      <div className="res-container">
        {resList.length === 0 && searchText ? (
          <h1>No restaurants found for "{searchText.trim()}"</h1>
        ) : (
          resList.map((res) => (
            <RestaurantCard key={res.id} restaurant={res} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
