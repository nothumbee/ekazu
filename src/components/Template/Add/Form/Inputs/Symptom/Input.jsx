import React, { useState } from 'react';
import { TitleInput } from '../helpers';
import ItemsInput from '../Items/Input';

const SymptomInput = ({ onChange, id, data = {} }) => {
  const defaultSymptom = {
    title: '',
    textGroup: {}
  };

  const [symptom, setSymptom] = useState(defaultSymptom);

  const handleChange = event => {
    const { name, value } = event.target;
    const newSymptom = { ...symptom, [name]: value };

    setSymptom(newSymptom);
    onChange(id, newSymptom, 'symptoms');
  };

  const handleGroupChange = (group, type) => {
    let newSymptom;

    if (type === 'textGroup') {
      newSymptom = { ...symptom, textGroup: group };
    }

    setSymptom(newSymptom);
    onChange(id, newSymptom, 'symptoms');
  };

  return (
    <div className="symptom">
      <h3>Přidat symptom nebo text</h3>
      <TitleInput onChange={handleChange} value={data.title} />
      <ItemsInput
        onChange={handleGroupChange}
        symptom={symptom}
        data={data.textGroup}
      />
    </div>
  );
};

export default SymptomInput;
