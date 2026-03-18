// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

// const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

// const ItemList = ({ iteam }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   return (
//     <div>
//       {iteam.map((item) => {
//         const info = item.card.info;

//         return (
//           <div key={info.id} className="flex justify-between border-b py-6">
//             {/* LEFT SIDE */}
//             <div className="w-9/12 pr-4">
//               <div
//                 className={`w-4 h-4 border-2 flex items-center justify-center mb-2 ${
//                   info.isVeg ? "border-green-600" : "border-red-600"
//                 }`}
//               >
//                 <div
//                   className={`w-2 h-2 rounded-full ${
//                     info.isVeg ? "bg-green-600" : "bg-red-600"
//                   }`}
//                 ></div>
//               </div>

//               <h3 className="font-semibold text-lg text-gray-800">
//                 {info.name}
//               </h3>

//               <p className="text-gray-700 font-medium">
//                 ₹{info.price / 100 || info.defaultPrice / 100}
//               </p>

//               {info.ratings?.aggregatedRating?.rating && (
//                 <p className="text-green-600 text-sm mt-1">
//                   ⭐ {info.ratings.aggregatedRating.rating}
//                 </p>
//               )}

//               <p className="text-gray-500 text-sm mt-2">{info.description}</p>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="w-3/12 relative">
//               {info.imageId && (
//                 <img
//                   src={IMG_CDN_URL + info.imageId}
//                   alt={info.name}
//                   className="rounded-xl object-cover w-full h-32"
//                 />
//               )}

//               <button
//                 className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold px-6 py-1 rounded-lg shadow-md border"
//                 onClick={() => handleAddItem(info)}
//               >
//                 ADD
//               </button>

//               <p className="text-center text-xs text-gray-500 mt-4">
//                 Customisable
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ItemList;

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const ItemList = ({ iteam }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>

      {iteam.map((item, index) => {

        const info = item.card?.info || item;

        return (
          <div
            key={info.id + "-" + index}
            className="flex justify-between border-b py-6"
          >

            {/* LEFT SIDE */}
            <div className="w-9/12">

              <h3 className="font-semibold text-lg">
                {info.name}
              </h3>

              <p className="text-gray-600">
                ₹{info.price / 100 || info.defaultPrice / 100}
              </p>

              <p className="text-sm text-gray-500">
                {info.description}
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="w-3/12 relative">

              {info.imageId && (
                <img
                  src={IMG_CDN_URL + info.imageId}
                  className="rounded-lg"
                />
              )}

              <button
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-4 py-1 rounded shadow"
                onClick={() => handleAddItem(info)}
              >
                ADD
              </button>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default ItemList;