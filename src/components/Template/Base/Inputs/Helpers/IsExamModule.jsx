import React, { useContext } from 'react';
import FormContext from '../../../context';
import IsExamCheckbox from './IsExamCheckbox';
import ExamNumberInputs from './ExamNumberInputs';

const IsExamModule = ({ id, isExam: override = false }) => {
  const { getFieldValue, getFieldDecorator } = useContext(FormContext);

  if (override) {
    getFieldDecorator(`${id}.isPartialExam`, { initialValue: true });
  }

  const isExam = getFieldValue(`${id}.exam`);

  return (
    <>
      {!override && <IsExamCheckbox id={id} />}
      {(isExam || override) && <ExamNumberInputs id={id} />}
    </>
  );
};

export default IsExamModule;
