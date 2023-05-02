import React, { useState } from "react";
import JsonEditor from "./components/jsonEditor/JsonEditor";
import FormBuilder from "./components/formBuilder/FormBuilder";

const App = () => {
  const [jsonOutput, setJsonOutput] = useState([]);
  return (
    <div className="row sm:flex">
      <div className="col sm:w-1/2">
        <JsonEditor setJsonOutput={setJsonOutput} />
      </div>
      <div className="col sm:w-1/2 pt-10 pr-8">
        <FormBuilder jsonOutput={jsonOutput} />
      </div>
    </div>
  );
};

export default App;
