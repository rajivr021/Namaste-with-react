import { useState } from "react";
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

  const showTopRated = () => {
    const filtered = allRestaurants.filter((res) => res.avgRating > 4.5);
    setResList(filtered);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
      showAll();
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Please check your internet......</h1>;

  if (loading) return <Shimmer />;

  return (
    <div className="p-6 bg-white min-h-screen h-48 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 ">
      <div className="flex flex-wrap items-center gap-4 mb-8 justify-center">
        {/* Search Bar - Modern Glassmorphism Style */}
        <div className="relative flex-1 min-w-[300px] max-w-[550px]">
          {/* Search Input */}
          <input
            className="block w-full pl-10 pr-12 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-gray-800 placeholder-gray-500 transition-all duration-200 shadow-sm hover:shadow-md"
            type="text"
            placeholder="Find restaurants or dishes..."
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          {/* Search Icon (GIF) */}
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={handleSearch}
          >
            <img
           src='data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtibG9jay1wcm9ncmVzc2lvbjp0YiIgZD0ibTExLjU3NiAxMi4yODMgMy41NjcgMy41NjdjLjM2Ny4zODIgMS4wOS0uMzQuNzA3LS43MDdsLTMuNTY3LTMuNTY3ek03IDFjMy4zMiAwIDYgMi42OCA2IDZzLTIuNjggNi02IDYtNi0yLjY4LTYtNiAyLjY4LTYgNi02eiIgY29sb3I9IiMwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvc3ZnPg=='
              className="w-7 h-7 object-contain"
            />
          </div>
        </div>

        {/* Filter Buttons - Modern Chip Style */}
        <div className="flex flex-wrap gap-3">
          <button
            className="px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 flex items-center gap-2 group"
            onClick={showAll}
          >
            <span>All Restaurants</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </button>
          <button
            className="px-4 py-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors duration-200 flex items-center gap-1.5 group"
            onClick={showTopRated}
          >
            <span>Top Rated</span>
            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full group-hover:bg-amber-200 transition-colors">
              4.5+
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-20">
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
