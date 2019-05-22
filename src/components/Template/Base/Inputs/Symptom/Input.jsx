import React, { useContext } from 'react';
import { TitleInput, IsExamCheckbox } from '../helpers';
import ItemsInput from '../Items/Input';
import Title from 'antd/lib/typography/Title';

import { Input } from 'antd';
import FormContext from '../../../context';
import ExamNumberInputs from '../ExamNumberInputs';
import withInjected from '../../../../HOC/withInjected';

const InputGroup = Input.Group;

const SymptomInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldValue } = context;

  const SymptomInputBase = props => (
    <InputGroup className="symptom">
      <Title level={4}>Přidat symptom nebo text</Title>
      <IsExamCheckbox id={id} />
      {props.children}
      <TitleInput id={id} />
      <ItemsInput id={id} />
    </InputGroup>
  );

  const isExamConditionFn = props => props.isExam;

  const SymptomInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(SymptomInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return <SymptomInputWithInjected isExam={isExam} id={id} />;
};

export default SymptomInput;
