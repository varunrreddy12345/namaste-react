//  import { useEffect, useState } from "react";

//  const useOnlineStatus =() => {

// const [useOnlineStatus, setOnlineStatus] =useState(true);
// useEffect (() => {

//     window.addEventListener("offline", () => {
// setOnlineStatus(false);

//     });

//     window.addEventListener("online", () => {

//         setOnlineStatus(true);
//     });

// }, []);
// return setOnlineStatus;
//  };
//  export default useOnlineStatus;

import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

  }, []);

  return onlineStatus;   // ✅ return state value, not setter
};

export default useOnlineStatus;



