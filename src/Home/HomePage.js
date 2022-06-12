import React from "react";
import Content from "./Content";

const HomePage = () => {
  return (
    <div className="bg-cyan-50 grid col-1 justify-center ">
      <h1 className="font-display text-xl text-cyan-900 m-2 ">
        MENS COMFORT AND STYLE
      </h1>
      <div className="h-24"></div>
      <Content />
    </div>
  );
};
export default HomePage;
