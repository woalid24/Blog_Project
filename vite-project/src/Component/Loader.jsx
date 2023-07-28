import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center item-center h-screen">
          <div className="text-center">
          <progress className="progress w-56"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
