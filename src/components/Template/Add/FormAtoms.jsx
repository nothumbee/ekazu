import React from 'react';
import ExamInput from './Form/Inputs/Exam';
import SymptomInput from './Form/Inputs/Symptom';
import RangeInput from './Form/Inputs/Range';

const CustomInputBase = ({ field, onChange, id }) => {
  switch (field.type) {
    case 'exam':
      return <ExamInput onChange={onChange} id={id} />;
    case 'range':
      return <RangeInput onChange={onChange} id={id} />;
    case 'symptom':
      return <SymptomInput onChange={onChange} id={id} />;

    default:
      return null;
  }
};

export default CustomInputBase;
