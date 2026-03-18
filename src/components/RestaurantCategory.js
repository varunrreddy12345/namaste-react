// import React from "react";
// import IteamList from "./IteamList";

// const RestaurantCategory = ({ data }) => {
//   return (
//     <div className="mb-4">
//       <div className="w-full bg-gray-100 shadow-md p-4 rounded-lg  items-center cursor-pointer hover:bg-gray-200">
//         <div className="flex justify-between">
//           <span className="font-semibold text-lg">
//             {data?.title} ({data.itemCards.length})
//           </span>
//           <span className="text-xl">⬇️</span>
//         </div>
//         <IteamList iteam={data.itemCards} />
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;

import ItemList from "./IteamList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mb-4">

      {/* Header */}
      <div
        className="w-full bg-gray-100 shadow-md p-4 rounded-lg flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold">
          {data.title} ({data.itemCards.length})
        </span>

        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {/* Accordion Content */}
      {showItems && <ItemList iteam={data.itemCards} />}

    </div>
  );
};

export default RestaurantCategory;