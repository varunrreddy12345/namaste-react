import { useEffect, useState } from "react";
import menuData from "../utils/menu.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setResInfo(menuData);
  };

  return resInfo;
};

export default useRestaurantMenu;