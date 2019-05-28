import React, { useContext } from 'react';
import { TitleInput, CustomNumberInput, IsExamCheckbox } from '../helpers';
import { Row, Col, Input } from 'antd';

import withInjected from '../../../../HOC/withInjected';
import FormContext from '../../../context';
import ExamNumberInputs from '../ExamNumberInputs';

const InputGroup = Input.Group;

const RangeInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldValue, getFieldDecorator } = context;

  const rangeNumberInputs = [
    { name: 'min', title: 'Minimum' },
    { name: 'max', title: 'Maximum' }
  ];
  const RangeNumberInputs = () =>
    rangeNumberInputs.map((input, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput id={id} name={input.name}>
          {input.title}
        </CustomNumberInput>
      </Col>
    ));

  getFieldDecorator(`${id}.id`, { initialValue: '' });
  const RangeInputBase = props => (
    <InputGroup className="range">
      <IsExamCheckbox id={id} />
      {props.children}
      <Row gutter={16}>
        <Col span={8}>
          <TitleInput id={id} />
        </Col>
        <RangeNumberInputs />
      </Row>
    </InputGroup>
  );

  const isExamConditionFn = props => props.isExam;

  const RangeInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(RangeInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return <RangeInputWithInjected isExam={isExam} id={id} />;
};

export default RangeInput;
