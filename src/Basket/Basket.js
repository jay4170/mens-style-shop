import React from "react";

const Basket = (props) => {
  const trolley = props.trolley;
  console.log(trolley);
  if (trolley.length === 0) {
    return (
      <div className="font-display absolute right-0 w-80 h-80 grid justify-center content-center bg-cyan-300">
        <h2 className="font-display ">YOUR SHOPPING BAG IS EMPTY!</h2>
      </div>
    );
  }
  if (trolley.length > 0) {
    return (
      <div className="font-display  absolute right-0 w-80 gap-9 grid justify-center content-center bg-cyan-300">
        <h2 className="font-display ">LOOK AT ALL YOUR LOVELY STUFF</h2>
        {trolley.map((item) => {
          return (
            <div className="grid grid-cols-2 justify-center content-center">
              <img src={item.image} alt="" />
              <h2 classname="font-display">{item.title}</h2>
            </div>
          );
        })}
        <div className="flex space-x-4 justify-center ">
          <button className="btn bg-cyan-100 rounded-full w-1/3">
            CHECKOUT
          </button>
          <button className="btn bg-cyan-100 rounded-full w-1/3">CLEAR</button>
        </div>
      </div>
    );
  }
};
export default Basket;
