import React, { useState } from "react";
const Element = ({ input, formState, setFormState }) => {
  const avoidInputType = ["radio", "file", "image", "checkbox"];
  const [errorMessage, setErrorMessage] = useState({ name: "", message: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrorMessage({});
    setFormState({ ...formState, [name]: value });
  };

  switch (input.fieldType) {
    case "label":
      return (
        <label
          id={input.id}
          className={`${input.class} block text-gray-700 text-sm font-bold mb-2`}
          htmlFor={input.for}
        >
          {input.label}
        </label>
      );
    case "input":
      return (
        <div className="mb-4">
          <input
            name={input.name}
            id={input.id}
            className={`${input.class} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:ring-blue-500 focus:border-blue-500 `}
            placeholder={input.placeholder}
            required={input.validations?.required}
            type={avoidInputType.includes(input.type) ? "text" : input.type}
            value={formState[input.name] || ""}
            onChange={(e) => handleChange(e)}
            minLength={input.validations?.minLength}
            maxLength={input.validations?.maxLength}
            pattern={input.validations?.regex}
          />
          {input.hint && (
            <span class="block text-xs text-gray-600 ml-1">
              Hint : {input.hint}
            </span>
          )}
          {errorMessage.name === input.name && (
            <span class="block text-sm text-red-700">
              {errorMessage.message}
            </span>
          )}
        </div>
      );
    case "button":
      return (
        <div className="flex items-center justify-between">
          <button
            className={`${input.class} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type={input.type}
            id={input.id}
          >
            {input.title}
          </button>
        </div>
      );
    default:
      break;
  }
};
export default Element;
