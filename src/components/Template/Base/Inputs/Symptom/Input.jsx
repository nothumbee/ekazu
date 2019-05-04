import React, { useState } from 'react';
import { TitleInput } from '../helpers';
import ItemsInput from '../Items/Input';
import Title from 'antd/lib/typography/Title';

const SymptomInput = ({ onChange, id, data = {} }) => {
  const defaultSymptom = {
    title: '',
    text: []
  };

  const [symptom, setSymptom] = useState(data || defaultSymptom);

  const handleChangeTitle = event => {
    const { value } = event.target;
    const newSymptom = { ...symptom, title: value };

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
      <TitleInput onChange={handleChangeTitle} value={data.title} />
      <ItemsInput
        onChange={handleTextGroupChange}
        symptom={symptom.textGroup}
        data={symptom.text}
      />
    </div>
  );
};

export default SymptomInput;
