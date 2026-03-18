// import { createContext } from "react";

// const UserContext = createContext({

// loggedInUser :"Default User",


// });

// export default UserContext;

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Guest",
  setUserName: () => {},
});

export default UserContext;