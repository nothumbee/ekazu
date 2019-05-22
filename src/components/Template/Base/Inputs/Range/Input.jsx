import React, { useContext } from 'react';
import { TitleInput, CustomNumberInput, IsExamCheckbox } from '../helpers';
import { Row, Col, Input, Collapse } from 'antd';
import Title from 'antd/lib/typography/Title';
import withInjected from '../../../../HOC/withInjected';
import FormContext from '../../../context';
import ExamNumberInputs from '../ExamNumberInputs';

const InputGroup = Input.Group;

const RangeInput = ({ id, deleteButton }) => {
  const context = useContext(FormContext);
  const { getFieldValue } = context;

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
      {props.deleteButton}
    </InputGroup>
  );

  const isExamConditionFn = props => props.isExam;

  const RangeInputWithInjected = withInjected(
    isExamConditionFn,
    ExamNumberInputs
  )(RangeInputBase);

  const isExam = getFieldValue(`${id}.isExam`);

  return (
    <RangeInputWithInjected
      isExam={isExam}
      id={id}
      deleteButton={deleteButton}
    />
  );
};

export default RangeInput;
