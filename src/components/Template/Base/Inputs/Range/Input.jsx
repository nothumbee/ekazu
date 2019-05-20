import React, { useState } from 'react';
import { TitleInput, CustomNumberInput, IsExamCheckbox } from '../helpers';
import { Row, Col, Input } from 'antd';
import Title from 'antd/lib/typography/Title';

const InputGroup = Input.Group;

const RangeInput = ({ onChange, id, data = {} }) => {
  const defaultRange = {
    min: '',
    max: '',
    exam: false,
    title: ''
  };
  const [range, setRange] = useState(data || defaultRange);

  const handleChange = event => {
    const { name, value } = event.target;
    const newRange = { ...range, [name]: value };

    setRange(newRange);
    onChange(id, newRange, 'ranges');
  };

  const rangeNumberInputs = [
    { name: 'min', title: 'Minimum', value: data.min },
    { name: 'max', title: 'Maximum', value: data.max }
  ];

  const ExamNumberInputs = () =>
    rangeNumberInputs.map((input, index) => (
      <Col span={8} key={index}>
        <CustomNumberInput
          name={input.name}
          onChange={handleChange}
          value={input.value}
        >
          {input.title}
        </CustomNumberInput>
      </Col>
    ));

  return (
    <InputGroup className="range">
      <Title level={4}>Přidat rozmezí</Title>

      <IsExamCheckbox checked={data.exam} onChange={handleChange} />
      <Row gutter={16}>
        <Col span={8}>
          <TitleInput onChange={handleChange} value={data.title} />
        </Col>
        <ExamNumberInputs />
      </Row>
    </InputGroup>
  );
};

export default RangeInput;
