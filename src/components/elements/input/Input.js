import React from "react";
const Input = ({ input }) => {
  return (
    <input
      name={input.name}
      id={input.id}
      className={`${input.class} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
      placeholder={input.placeholder}
      required={input.required}
      type="adsf"
      // value={formState[input.name] || ""}
      // onChange={handleChange}
    />
  );
};
export default Input;
