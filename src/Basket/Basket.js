import React from "react";

const Basket = (props) => {
  const trolley = props.trolley;
  const isOpen = props.isOpen;
  const setTrolley = props.setTrolley;
  const handleBasketRemoval = props.handleBasketRemoval;
  if (isOpen) {
    if (trolley.length === 0) {
      return (
        <div className="z-40 font-display absolute right-0 w-80 h-80 grid justify-center content-center bg-cyan-100">
          <h2 className="font-display ">YOUR SHOPPING BAG IS EMPTY!</h2>
        </div>
      );
    } else if (trolley.length > 0 && trolley.length <= 5) {
      return (
        <div className="font-display z-40 absolute right-0 w-80 gap-9 grid justify-center content-center bg-cyan-100">
          <h2 className="font-display ">LOOK AT ALL YOUR LOVELY STUFF</h2>
          {trolley.map((item) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-2 justify-center content-center"
              >
                <img src={item.image} alt="" />
                <div>
                  <h2 className="font-display">{item.title}</h2>
                  <h2 className="font-display">{item.quantity}</h2>
                  <h2 className="font-display">{`Each £ ${item.price}`}</h2>
                  <h2
                    onClick={() => {
                      handleBasketRemoval(item);
                    }}
                  >
                    Remove
                  </h2>
                </div>
              </div>
            );
          })}
          <div className="flex space-x-4 justify-center ">
            <button className="btn bg-cyan-100 rounded-full w-1/3">
              CHECKOUT
            </button>
            <button
              onClick={() => {
                setTrolley([]);
              }}
              className="btn bg-cyan-100 rounded-full w-1/3"
            >
              CLEAR
            </button>
          </div>
        </div>
      );
    } else if (trolley.length > 5) {
      return (
        <div className="font-display z-40 absolute right-0 w-80 gap-9 grid justify-center content-center bg-cyan-100">
          <h2 className="font-display ">LOOK AT ALL YOUR LOVELY STUFF</h2>
          {trolley.map((item) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-2 justify-center content-center"
              >
                <img src={item.image} alt="" />
                <h2 className="font-display">{item.title}</h2>
              </div>
            );
          })}
          <a href="/basket">
            <h2 className="text-lg">.......More items</h2>
          </a>
          <div className="flex space-x-4 justify-center ">
            <button className="btn bg-cyan-100 rounded-full w-1/3">
              CHECKOUT
            </button>
            <button className="btn bg-cyan-100 rounded-full w-1/3">
              CLEAR
            </button>
          </div>
        </div>
      );
    }
  }
};
export default Basket;
