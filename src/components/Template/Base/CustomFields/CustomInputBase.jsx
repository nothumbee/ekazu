import React from 'react';
import ExamInput from '../Inputs/Exam/Input';
import SymptomInput from '../Inputs/Symptom/Input';
import RangeInput from '../Inputs/Range/Input';

const CustomInputBase = ({ type, ...rest }) => {
  return {
    exams: <ExamInput {...rest} />,
    ranges: <RangeInput {...rest} />,
    symptoms: <SymptomInput {...rest} />
  }[type];
};

export default CustomInputBase;
