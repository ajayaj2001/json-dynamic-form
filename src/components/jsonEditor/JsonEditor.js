import React, { useState, useEffect } from "react";
import "./JsonEditor.css";
import demoData from "../../assets/dummyData/data.json";

function JsonEditor({ setJsonOutput }) {
  const initialJsonValue = "{\n\t\t\n}";
  const [jsonData, setJsonData] = useState(initialJsonValue);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    try {
      const parsedJson = JSON.parse(jsonData);
      setJsonOutput(parsedJson); //if no error thrown it update the json output variable
      setValidationErrors([]);
    } catch (error) {
      setValidationErrors([error.message]);
    }
  }, [jsonData]);

  function handleJsonDataChange(event) {
    setJsonData(event.target.value);
  }

  function addDummyData() {
    setJsonData(JSON.stringify(demoData, null, "\t"));
  }

  return (
    <div className="w-full h-full bg-grey-lightest font-sans">
      <div className="box border rounded flex flex-col shadow bg-white h-4/6 ">
        <div className="box__title bg-grey-lighter px-3 py-2 border-b flex items-center justify-between">
          <h3 className="text-sm text-grey-darker font-medium">Json Editor</h3>
          <div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:ring-blue-100 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
              onClick={() => addDummyData()}
            >
              Add Demo Data
            </button>
            <button
              className="py-1.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-3 focus:ring-gray-200  dark:text-gray-400  "
              onClick={() => setJsonData(initialJsonValue)}
            >
              Clean
            </button>
          </div>
        </div>
        <textarea
          placeholder="Input some json"
          className="text-grey-darkest flex-1 p-2 m-1 bg-transparent editor flex"
          name="tt"
          value={jsonData}
          onChange={handleJsonDataChange}
        />
      </div>

      <div class="w-full h-48 p-4 bg-white border border-gray-200 rounded-lg shadow mt-6 ">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">
            Json Error List
          </h5>
        </div>
        <div class="flow-root">
          {validationErrors.length > 0 && (
            <div className="mt-2 text-red-500">
              {validationErrors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JsonEditor;
