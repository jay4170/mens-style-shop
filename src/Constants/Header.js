import React from "react";
import logo from "../Media/Component 1 (3).png";
import search from "../Media/search_FILL0_wght100_GRAD200_opsz48.png";
import favourites from "../Media/favorite_FILL0_wght100_GRAD200_opsz48.png";
import basketImg from "../Media/shopping_bag_FILL0_wght100_GRAD200_opsz48.png";

const Header = (props) => {
  const basketNumber = props.trolley;
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
        <div >
          <img className="h-10" alt="basket" src={basketImg}></img>
          {basketNumber > 0 && (
            <p className="absolute h-7 top-5 right-6 text-cyan-50 font-display text-lg bg-red-500 rounded-full px-1">
              {basketNumber}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
