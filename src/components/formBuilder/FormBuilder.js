import React, { useState } from "react";
import Element from "../element/Element";

const FormBuilder = ({ jsonOutput }) => {
  const [formState, setFormState] = useState({});
  const [formSubmitResult, setFormSubmitResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitResult(JSON.stringify(formState));
  };

  return (
    <div className="w-full h-full bg-grey-lightest font-sans">
      <div className="p-8 rounded border border-gray-200 h-4/6 sm:mt-24 lg:mt-0 overflow-y-auto">
        <div className="heading mb-7">
          <h1 className="font-medium text-3xl">{jsonOutput.title}</h1>
          <p className="text-gray-600 mt-3 text-xs">{jsonOutput.description}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            {jsonOutput?.properties?.map((input, i) => (
              <Element
                formState={formState}
                setFormState={setFormState}
                input={input}
                key={i}
              />
            ))}
          </div>
        </form>
      </div>
      <div className="w-full h-48 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">
            Form Submit Response
          </h5>
        </div>
        <div className="flow-root">{formSubmitResult}</div>
      </div>
    </div>
  );
};

export default FormBuilder;
