import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="border-4 border-l-transparent animate-spin border-red-400 w-6 h-6  rounded-full"></div>
  );
};

export default Loader;
