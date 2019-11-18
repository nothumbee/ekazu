import React, { useContext } from 'react';
import ExamInput from '../Base/Inputs/Exam/Input';
import RangeInput from '../Base/Inputs/Range/Input';
import SymptomInput from '../Base/Inputs/Symptom/Input';
import * as TYPES from './generatorTypes';
import FormContext from '../context';

const GeneratorSingle = ({ id, type }) => {
  const { getFieldDecorator } = useContext(
    FormContext,
  );

  getFieldDecorator(`${id}.type`, { initialValue: '' });
  getFieldDecorator(`${id}.order`, { initialValue: '' });
  getFieldDecorator(`${id}.price`, { initialValue: '' });
  getFieldDecorator(`${id}.malus`, { initialValue: '' });
  getFieldDecorator(`${id}.bonus`, { initialValue: '' });
  getFieldDecorator(`${id}.max`, { initialValue: '' });
  getFieldDecorator(`${id}.min`, { initialValue: '' });

  return {
    [TYPES.IMAGES]: <ExamInput id={id} />,
    [TYPES.RANGE]: <RangeInput id={id} />,
    [TYPES.TEXT]: <SymptomInput id={id} />,
  }[type];
};

export default GeneratorSingle;
