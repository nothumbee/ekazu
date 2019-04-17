import React from 'react';
import ExamInput from './Form/Inputs/Exam';
import SymptomInput from './Form/Inputs/Symptom';
import RangeInput from './Form/Inputs/Range';

const CustomInputBase = ({ type, onChange, id }) => {
  switch (type) {
    case 'exams':
      return <ExamInput onChange={onChange} id={id} />;
    case 'ranges':
      return <RangeInput onChange={onChange} id={id} />;
    case 'symptoms':
      return <SymptomInput onChange={onChange} id={id} />;

    default:
      return null;
  }
};

export default CustomInputBase;
