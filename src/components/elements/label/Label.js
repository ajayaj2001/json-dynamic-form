import React from "react";
const Label = ({ input }) => {
  return (
    <label
      id={input.id}
      className={`${input.class} block text-gray-700 text-sm font-bold mb-2`}
      for={input.for}
    >
      {input.label}
    </label>
  );
};
export default Label;
