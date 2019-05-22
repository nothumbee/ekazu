import React, { useContext } from 'react';
import { Row, Typography, Input } from 'antd';

import { TitleInput, IsExamCheckbox } from '../helpers';
import ItemsInput from '../Items/Input';
import withInjected from '../../../../HOC/withInjected';
import ExamNumberInputs from '../ExamNumberInputs';
import FormContext from '../../../context';
import ImageGroupInput from '../ImageGroup/Input';

const InputGroup = Input.Group;

const { Title } = Typography;

const ExamInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldValue } = context;

  const ExamInputBase = props => (
    <InputGroup className={'exam'}>
      <Title level={4}>Přidání vyšetření</Title>

      <TitleInput id={id} />

      <IsExamCheckbox id={id} />
      <Row gutter={16}>
        {props.children}

        <ItemsInput id={id} />
        <ImageGroupInput id={id} />
      </Row>
    </InputGroup>
  );

  const isExamConditionFn = props => props.isExam;

  const ExamInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(ExamInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return <ExamInputWithInjected isExam={isExam} id={id} />;
};

export default ExamInput;
