import React from "react";
import logo from "../Media/Component 1 (3).png";
import search from "../Media/search_FILL0_wght100_GRAD200_opsz48.png";
import favourites from "../Media/favorite_FILL0_wght100_GRAD200_opsz48.png";
import basket from "../Media/shopping_bag_FILL0_wght100_GRAD200_opsz48.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-cyan-50 ">
      <a href="/">
        <img className="h-10" alt="DAVE on grey background" src={logo}></img>
      </a>
      <div className="flex justify-between">
        <a href="/shop">
          <img className="h-10" alt="Search" src={search}></img>
        </a>
        <img className="h-10" alt="Favourites" src={favourites}></img>
        <a href="/basket">
          <img className="h-10" alt="basket" src={basket}></img>
        </a>
      </div>
    </div>
  );
};
export default Header;
