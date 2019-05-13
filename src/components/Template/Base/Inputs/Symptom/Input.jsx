import React, { useState } from 'react';
import { TitleInput, IsExamCheckbox } from '../helpers';
import ItemsInput from '../Items/Input';
import Title from 'antd/lib/typography/Title';

const SymptomInput = ({ onChange, id, data = {} }) => {
  const defaultSymptom = {
    title: '',
    exam: false,
    text: []
  };

  const [symptom, setSymptom] = useState(data || defaultSymptom);

  const handleChange = event => {
    const { name, value } = event.target;
    const newSymptom = { ...symptom, [name]: value };

    setSymptom(newSymptom);
    onChange(id, newSymptom, 'symptoms');
  };

  const handleTextGroupChange = group => {
    const newSymptom = { ...symptom, text: group };

    setSymptom(newSymptom);
    onChange(id, newSymptom, 'symptoms');
  };

  return (
    <div className="symptom">
      <Title level={4}>Přidat symptom nebo text</Title>

      <IsExamCheckbox checked={data.exam} onChange={handleChange} />
      <TitleInput onChange={handleChange} value={data.title} />
      <ItemsInput
        onChange={handleTextGroupChange}
        symptom={symptom.textGroup}
        data={symptom.text}
      />
    </div>
  );
};

export default SymptomInput;
