import React, { useState } from 'react';
import { TitleInput, CustomNumberInput } from '../helpers';
import { Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';

const RangeInput = ({ onChange, id, data = {} }) => {
  const defaultRange = {
    min: '',
    max: '',
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
    <div className="range">
      <Title level={4}>Přidat rozmezí</Title>

      <Row gutter={16}>
        <ExamNumberInputs />
        <Col span={8}>
          <TitleInput onChange={handleChange} value={data.title} />
        </Col>
      </Row>
    </div>
  );
};

export default RangeInput;
