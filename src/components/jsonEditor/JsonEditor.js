import React, { useState, useEffect } from "react";
import "./JsonEditor.css";

function JsonEditor({ setJsonOutput }) {
  const [jsonData, setJsonData] = useState("[\n\t{\n\t\t\n\t}\n]");
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

  return (
    <div className="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans">
      <div className="box border rounded flex flex-col shadow bg-white">
        <div className="box__title bg-grey-lighter px-3 py-2 border-b">
          <h3 className="text-sm text-grey-darker font-medium">Json Editor</h3>
        </div>
        <textarea
          placeholder="Input some json"
          className="text-grey-darkest flex-1 p-2 m-1 bg-transparent editor"
          name="tt"
          value={jsonData}
          onChange={handleJsonDataChange}
          rows={17}
        />
      </div>
      {validationErrors.length > 0 && (
        <div className="mt-2 text-red-500">
          {validationErrors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default JsonEditor;
