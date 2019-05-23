import React, { useContext } from 'react';
import { Row, Input } from 'antd';

import { TitleInput, IsExamCheckbox } from '../helpers';
import ItemsInput from '../Items/Input';
import withInjected from '../../../../HOC/withInjected';
import ExamNumberInputs from '../ExamNumberInputs';
import FormContext from '../../../context';
import ImageGroupInput from '../ImageGroup/Input';

const InputGroup = Input.Group;

const ExamInput = ({ id, deleteButton }) => {
  const context = useContext(FormContext);
  const { getFieldValue } = context;

  const ExamInputBase = props => (
    <InputGroup className={'exam'}>
      <TitleInput id={id} />

      <IsExamCheckbox id={id} />
      <Row gutter={16}>
        {props.children}

        <ItemsInput id={id} />
        <ImageGroupInput id={id} />
        {props.deleteButton}
      </Row>
    </InputGroup>
  );

  const isExamConditionFn = props => props.isExam;

  const ExamInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(ExamInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return (
    <ExamInputWithInjected
      isExam={isExam}
      id={id}
      deleteButton={deleteButton}
    />
  );
};

export default ExamInput;
