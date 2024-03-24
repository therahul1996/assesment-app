import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50 backdrop-filter backdrop-blur-lgss">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color={"#ccc"}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeColor={"#ccc"}
      />
    </div>
  );
};

export default Loading;
