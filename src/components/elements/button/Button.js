import React from "react";
const Button = ({ input }) => {
  return (
    <button
      className={`${input.class} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type={input.type}
      id={input.id}
    >
      {input.name}
    </button>
  );
};
export default Button;
