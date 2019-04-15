import React, { useState } from 'react';
import { TitleInput, ItemsInput } from './helpers';

const SymptomInput = ({ onChange, id }) => {
  const [symptom, setSymptom] = useState({});
  // input onchange -> store the value in higher component > send to parent comp
  const handleChange = event => {
    const { name, value } = event.target;
    const newSymptom = { ...symptom, [name]: value };

    setSymptom(newSymptom);
    onChange(id, newSymptom, 'symptom');
    // and send to onChange handler with id of group and save to state
  };

  const handleGroupChange = (item, type) => {
    let newSymptom;

    if (type === 'textGroup') {
      newSymptom = { ...symptom, textGroup: { ...symptom.textGroup, ...item } };
    }

    setSymptom(newSymptom);
    onChange(id, newSymptom, 'exam');
  };

  return (
    <div>
      <h3>Add Symptom or Text</h3>
      <TitleInput onChange={handleChange} />
      <ItemsInput onChange={handleGroupChange} symptom={symptom} />
    </div>
  );
};

export default SymptomInput;
