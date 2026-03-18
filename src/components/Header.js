// import { LOGO_URL } from "../utils/contants";
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import Grocery from "./Grocery";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";
// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//   const { loggedInUser } = useContext(UserContext);
//   //console.log(loggedInUser);

//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <div className="flex justify-between shadow-lg m-2">
//       <div className="logo-container">
//         <img className="w-36" src={LOGO_URL} />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex p-4 m-4">
//           <li className="px-4">
//             online Status : {onlineStatus ? " ✅" : "🔴 "}
//           </li>

//           <li className="px-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/about">About Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/Cart"> Cart - ({cartItems?.length}items)</Link>
//           </li>
//           <li className="px-4 font-bold">{loggedInUser}</li>
//           <li className="px-4">
//             <button
//               className="login"
//               onClick={() => {
//                 btnNameReact === "Login"
//                   ? setBtnNameReact("Logout")
//                   : setBtnNameReact("Login");
//               }}
//             >
//               {btnNameReact}
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { LOGO_URL } from "../utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const handleLogin = () => {

    if (btnNameReact === "Login") {
      setUserName("Varun");   // user logged in
      setBtnNameReact("Logout");
    } else {
      setUserName("Guest");   // user logged out
      setBtnNameReact("Login");
    }

  };

  return (
    <div className="flex justify-between shadow-lg m-2">

      <div>
        <img className="w-36" src={LOGO_URL} />
      </div>

      <div className="flex items-center">

        <ul className="flex p-4 m-4 items-center">

          <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4">
            <Link to="/cart">Cart ({cartItems?.length})</Link>
          </li>

          <li className="px-4 font-bold text-blue-600">
            {loggedInUser}
          </li>

          <li className="px-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
              onClick={handleLogin}
            >
              {btnNameReact}
            </button>
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Header;