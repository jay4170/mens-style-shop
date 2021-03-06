import React from "react";

const Basket = (props) => {
  const trolley = props.trolley;
  const isOpen = props.isOpen;
  const setTrolley = props.setTrolley;
  const handleBasketRemoval = props.handleBasketRemoval;
  const handleBasketDecrement = props.handleBasketDecrement;
  const handleBasketIncrement = props.handleBasketIncrement;
  const trolleyValue = props.trolleyValue;

  if (isOpen) {
    if (trolley.length === 0) {
      return (
        <div className="z-40 font-display absolute right-0 w-80 h-80 grid justify-center content-center bg-slate-50">
          <h2 className="font-display text-center">
            YOUR SHOPPING BAG IS EMPTY!
          </h2>
        </div>
      );
    } else {
      return (
        <div className="font-display z-40 absolute right-0 w-80 gap-9 grid justify-center content-center bg-slate-50">
          <h2 className="font-display text-center">
            LOOK AT ALL YOUR LOVELY STUFF
          </h2>
          {trolley.map((item) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-2 justify-center content-center"
              >
                <img className="mx-2"src={item.image} alt="" />
                <div className="mx-4">
                  <h2 className="font-display mt-4">{item.title}</h2>
                  <h2 className="font-display mt-4">{`Each £ ${item.price.toFixed(
                    2
                  )}`}</h2>
                  <div className="flex">
                    <button
                      onClick={() => {
                        handleBasketDecrement(item);
                      }}
                      className="mx-2"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <h2 className="font-display">{item.quantity}</h2>
                    <button
                      onClick={() => {
                        handleBasketIncrement(item);
                      }}
                      className="mx-2"
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      handleBasketRemoval(item);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="mx-4">
            Total Basket Value: £{trolleyValue.toFixed(2)}
          </div>
          <div className="flex space-x-4 justify-center mb-2">
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
    }
  }
};
export default Basket;
