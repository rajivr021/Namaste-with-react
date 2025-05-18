import {useState} from 'react'
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resList, allRestaurants, setResList, loading } = useRestaurantList();

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setResList(filtered);
  };

  const showAll = () => setResList(allRestaurants);

  const showTopRated = () => { const filtered = allRestaurants.filter((res) => res.avgRating > 4.5); setResList(filtered); };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") { showAll(); }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Please check your internet......</h1>;

if (loading) return <Shimmer />;


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
        <button className="Ratingbtn Allbtn" onClick={showAll}>
          All
        </button>
        <button className="Ratingbtn" onClick={showTopRated}>
          Rating 4.5+
        </button>
      </div>

      <div className="res-container">
        {resList.length === 0 && searchText ? (
          <h1>No restaurants found for "{searchText.trim()}"</h1>
        ) : (
          resList.map((res) => (
            <Link key={res.id} to={"/restaurent/" + res.id}>
              <RestaurantCard restaurant={res} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
