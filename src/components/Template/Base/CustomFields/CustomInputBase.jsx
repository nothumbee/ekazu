import React from 'react';
import ExamInput from '../Inputs/Exam/Input';
import SymptomInput from '../Inputs/Symptom/Input';
import RangeInput from '../Inputs/Range/Input';
import GroupInput from '../Group/Input';
import PartialExamInput from '../PartialExam/Input';

const CustomInputBase = ({ type, ...rest }) => ({
  exams: <ExamInput {...rest} />,
  ranges: <RangeInput {...rest} />,
  symptoms: <SymptomInput {...rest} />,
  groups: <GroupInput {...rest} />,
  partials: <PartialExamInput {...rest} />,
}[type]);

export default CustomInputBase;
