// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//   const [listofRestaurants, setListofRestraunt] = useState([]);
//   const [filteredRestaurant, setFilterdRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   console.log("Body Rendered");
//   useEffect(() => {
//     fetchData();
//   }, [searchText]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62488699999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//       );

//       const json = await response.json();
//       console.log(json);

//       const restaurants =
//         json?.data?.cards?.find(
//           (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
//         )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//       setListofRestraunt(restaurants);
//       setFilterdRestaurant(restaurants); // ✅ fixed
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1>looks like your offline!! please check internet connections🥴;</h1>
//     );

//   if (listofRestaurants.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />

//           <button
//             onClick={() => {
//               console.log(searchText);
//               const filteredRestaurant = listofRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase()),
//               );
//               setFilterdRestaurant(filteredRestaurant);
//             }}
//           >
//             search
//           </button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listofRestaurants.filter(
//               (res) => res.info.avgRating > 4,
//             );
//             setListofRestraunt(filteredList);
//           }}
//         >
//           TOP Rated Restaurants
//         </button>
//       </div>
//       <div className="res-conatainer">
//         {filteredRestaurant.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={"/restaurants/" + restaurant.info.id}
//           >
//             <RestaurantCard resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
import React from "react";

import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setListofRestraunt] = useState([]);
  const [filteredRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  console.log("Body Rendered", listofRestaurants);

  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62488699999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await response.json();

      const restaurants =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListofRestraunt(restaurants);
      setFilterdRestaurant(restaurants);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500 text-xl mt-10">
        Looks like you're offline!! Please check internet connection 🥴
      </h1>
    );

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-6">
      {/* Search + Filter Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            className="border border-gray-400 rounded-md px-3 py-1"
            value={searchText}
            placeholder="Search restaurant..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilterdRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setFilterdRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex flex-col gap-2 mb-6 w-72">
          <label className="text-sm font-semibold text-gray-600">
            User Name :
          </label>

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* {restaurant.info.promoted ? (
             <RestaurantCardPromoted resData={restaurant}/>
            ) : (
              <RestaurantCard resData={restaurant}/>

              )} */}
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
