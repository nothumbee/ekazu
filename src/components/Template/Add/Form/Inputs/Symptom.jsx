import React, { useState } from "react";
import { TitleInput, ItemsInput } from "./helpers";

const SymptomInput = ({ onChange, id }) => {
  const [symptom, setSymptom] = useState({});
  // input onchange -> store the value in higher component > send to parent comp
  const handleChange = event => {
    const { name, value } = event.target;
    const newSymptom = { ...symptom, [name]: value };

    setSymptom(newSymptom);
    onChange(id, newSymptom, "symptoms");
    // and send to onChange handler with id of group and save to state
  };

  const handleGroupChange = (item, type) => {
    let newSymptom;

    if (type === "textGroup") {
      newSymptom = { ...symptom, textGroup: { ...symptom.textGroup, ...item } };
    }

    setSymptom(newSymptom);
    onChange(id, newSymptom, "symptoms");
  };

  return (
    <div className="symptom">
      <h3>Přidat symptom nebo text</h3>
      <TitleInput onChange={handleChange} />
      <ItemsInput onChange={handleGroupChange} symptom={symptom} />
    </div>
  );
};

export default SymptomInput;
