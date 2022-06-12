import React from "react";
import logo from "../Media/Component 1 (3).png";
import search from "../Media/search_FILL0_wght100_GRAD200_opsz48.png";
import favourites from "../Media/favorite_FILL0_wght100_GRAD200_opsz48.png";
import basket from "../Media/shopping_bag_FILL0_wght100_GRAD200_opsz48.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-cyan-50 ">
      <img className="h-9" alt="DAVE on grey background" src={logo}></img>
      <div className="flex justify-between">
        <img className="h-9" alt="Search" src={search}></img>
        <img className="h-9" alt="Favourites" src={favourites}></img>
        <img className="h-9" alt="baket" src={basket}></img>
      </div>
    </div>
  );
};
export default Header;
