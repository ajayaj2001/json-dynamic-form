import React from "react";
import Input from "../elements/input/Input";
import Label from "../elements/label/Label";
import Button from "../elements/button/Button";
const Element = ({ element, input }) => {
  switch (element) {
    case "label":
      return <Label input={input} />;
    case "input":
      return <Input input={input} />;
    case "button":
      return <Button input={input} />;
    default:
      return null;
  }
};
export default Element;
