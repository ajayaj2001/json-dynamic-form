import React, { useState } from "react";
import JsonEditor from "./components/jsonEditor/JsonEditor";
import FormBuilder from "./components/formBuilder/FormBuilder";

const App = () => {
  const [jsonOutput, setJsonOutput] = useState([]);
  return (
    <div className="row sm:grid lg:flex p-8 gap-8 h-screen ">
      <div className="col lg:w-1/2 ">
        <JsonEditor setJsonOutput={setJsonOutput} />
      </div>
      <div className="col lg:w-1/2">
        <FormBuilder jsonOutput={jsonOutput} />
      </div>
    </div>
  );
};

export default App;
