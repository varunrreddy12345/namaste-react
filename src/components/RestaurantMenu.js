// import { useEffect, useState } from "react";
// import menuData from "../utils/menu.json";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestrauntMenu";

// const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

// const RestaurantMenu = () => {
//   const [menu, setMenu] = useState(null);

//   const { resId } = useParams();

//   const resInfo = useRestaurantMenu(resId);

//   useEffect(() => {
//     setMenu(menuData);
//   }, []);

//   if (!menu) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     menu?.data?.cards[2]?.card?.card?.info || {};

//   const itemCards =
//     menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.filter((c) => c?.card?.card?.itemCards)
//       ?.flatMap((c) => c?.card?.card?.itemCards) || [];

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines?.join(", ")} - {costForTwoMessage}
//       </p>

//       <h2>Menu</h2>

//       <div className="menu-container">
//         {itemCards.slice(0, 10).map((item) => {
//           const info = item.card.info;

//           return (
//             <div className="menu-card" key={info.id}>
//               <div className="menu-info">
//                 <h3>{info.name}</h3>
//                 <p className="price">
//                   Rs.{(info.price || info.defaultPrice) / 100}
//                 </p>
//               </div>

//               {info.imageId && (
//                 <img
//                   className="menu-img"
//                   src={IMG_CDN_URL + info.imageId}
//                   alt={info.name}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useEffect, useState } from "react";
import menuData from "../utils/menu.json";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const [showIndex, setShowIndex] = useState(null); // 👈 controls accordion

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  useEffect(() => {
    setMenu(menuData);
  }, []);

  if (!menu) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menu?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Restaurant Info */}
      <h1 className="text-3xl font-bold mb-2">{name}</h1>

      <p className="text-gray-600 mb-6">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {/* Categories */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
