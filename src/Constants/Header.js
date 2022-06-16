import React from "react";
import logo from "../Media/Component 1 (3).png";
import search from "../Media/search_FILL0_wght100_GRAD200_opsz48.png";
// import favourites from "../Media/favorite_FILL0_wght100_GRAD200_opsz48.png";
import basketImg from "../Media/shopping_bag_FILL0_wght100_GRAD200_opsz48.png";

const Header = (props) => {
  const handleFilterOpening = props.handleFilterOpening;
  const handleSearchOpening = props.handleSearchOpening;
  const searchOpen = props.searchOpen;
  const searchTyping = props.searchTyping;
  const setSearchTyping = props.setSearchTyping;
  const handleSearchSubmit = props.handleSearchSubmit;
const trolleyQuantity =props.trolleyQuantity
  const typingHandler = (e) => {
    setSearchTyping(e.target.value);
  };

  return (
    <div className="flex justify-between  ">
      {/* Logo */}
      <a href="/">
        <img className="h-10" alt="DAVE on grey background" src={logo}></img>
      </a>

      <div className="flex justify-between">
        {/* hidden search icon and bar*/}
        {searchOpen && (
          <div className="flex">
            {searchTyping === "" && (
              <img
                onClick={handleSearchOpening}
                className="h-10 border-solid fixed float-right"
                alt="Search"
                src={search}
              ></img>
            )}

            <form onSubmit={searchTyping} action="/shop">
              <input
                className="h-10 border-2  border-cyan-200 bg-cyan-50"
                type="text"
                value={searchTyping}
                onChange={typingHandler}
                onSubmit={searchTyping}
              ></input>
            </form>
          </div>
        )}

        {/* Not hidden search icon */}
        {!searchOpen && (
          <div>
            <img
              onClick={handleSearchOpening}
              className="h-10"
              alt="Search"
              src={search}
            ></img>
          </div>
        )}
        {/* Cart  */}
        <div onClick={handleFilterOpening}>
          <img className="h-10" alt="basket" src={basketImg}></img>
          {trolleyQuantity > 0 && (
            <p className="absolute h-7 top-5 right-6 text-cyan-50 font-display text-lg bg-red-500 rounded-full px-1">
              {trolleyQuantity}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
