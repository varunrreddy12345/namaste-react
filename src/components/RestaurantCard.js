// import { CDN_URL } from "../utils/contants";

// const RestaurantCard = (props) => {
//   const { resData } = props;

//   const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
//     resData?.info;

//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />

//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating}</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{sla.deliveryTime} minutes</h4>
//     </div>
//   );
// };

// export default RestaurantCard;

import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import  UserContext  from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-64 bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <img
        className="w-full h-40 object-cover rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold text-lg mt-2">{name}</h3>

      <h4 className="text-gray-600 text-sm">{cuisines.join(", ")}</h4>

      <h4 className="text-green-600 font-semibold">⭐ {avgRating}</h4>

      <h4 className="text-gray-700">{costForTwo}</h4>

      <h4 className="text-gray-500 text-sm">{sla.deliveryTime} minutes</h4>
      <h4 className="text-gray-500 text-sm">User : {loggedInUser} </h4>
    </div>
  );
};
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        
        <label className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-md">
          Promoted
        </label>

        <RestaurantCard {...props} />

      </div>
    );
  };
};
export default RestaurantCard;
