import React, { useState } from "react";

const FormBuilder = ({ jsonOutput }) => {
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with state:", formState);
  };

  return (
    <div>
      <form
        class="bg-white shadow rounded px-20 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {jsonOutput?.map((input) => (
          <div class="mb-6">
            <label
              id={input.id}
              className={`${input.class} block text-gray-700 text-sm font-bold mb-2`}
              for={input.for}
            >
              {input.label}
            </label>
            <input
              name={input.name}
              id={input.id}
              className={`${input.class} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder={input.placeholder}
              required={input.required}
              type="adsf"
              value={formState[input.name] || ""}
              onChange={handleChange}
            />
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
