import React from 'react';
import ExamInput from '../Inputs/Exam/Input';
import SymptomInput from '../Inputs/Symptom/Input';
import RangeInput from '../Inputs/Range/Input';

const CustomInputBase = ({ type, onChange, id, data }) => {
  switch (type) {
    case 'exams':
      return <ExamInput onChange={onChange} id={id} data={data} />;
    case 'ranges':
      return <RangeInput onChange={onChange} id={id} data={data} />;
    case 'symptoms':
      return <SymptomInput onChange={onChange} id={id} data={data} />;

    default:
      return null;
  }
};

export default CustomInputBase;
