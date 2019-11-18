import React, { useContext } from 'react';
import {
  Row, Col, Input, Card,
} from 'antd';
import CustomNumberInput from '../Helpers/CustomNumberInput';
import TitleInput from '../Helpers/TitleInput';

import FormContext from '../../../context';
import IsExamModule from '../Helpers/IsExamModule';
import UnitInput from '../Helpers/UnitInput';

const InputGroup = Input.Group;

const rangeNumberInputs = [
  { name: 'min', title: 'Minimum' },
  { name: 'max', title: 'Maximum' },
];

const RangeInput = ({ id }) => {
  const { getFieldDecorator, getFieldValue } = useContext(FormContext);
  const isPartialExam = getFieldValue(`${id.split('.')[0]}.isPartialExam`);

  getFieldDecorator(`${id}.id`, { initialValue: '' });

  return (
    <Card
      style={{
        width: '100%',
        backgroundColor: '#e3e3e3',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #eee',
        margin: '20px 0px',
      }}
      title={<TitleInput id={id} />}
    >
      <InputGroup className="range">
        {!isPartialExam && <IsExamModule id={id} />}
        <Row gutter={16}>
          <RangeNumberInputs id={id} />
        </Row>
      </InputGroup>
    </Card>
  );
};

const RangeNumberInputs = ({ id }) => (
  <>
    {rangeNumberInputs.map((input, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput id={id} name={input.name}>
          {input.title}
        </CustomNumberInput>
      </Col>
    ))}
    <Col span={8}>
      <UnitInput id={id} />
    </Col>
  </>
);

export default RangeInput;
