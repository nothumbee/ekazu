import React, { useState } from 'react';
import { TitleInput, MinInput, MaxInput } from '../helpers';
import { Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';

const RangeInput = ({ onChange, id, data = {} }) => {
  const defaultRange = {
    min: '',
    max: '',
    title: ''
  };
  const [range, setRange] = useState(defaultRange);

  const handleChange = event => {
    const { name, value } = event.target;
    const newRange = { ...range, [name]: value };

    setRange(newRange);
    onChange(id, newRange, 'ranges');
  };

  return (
    <div className="range">
      <Title level={4}>Přidat rozmezí</Title>

      <Row gutter={16}>
        <Col span={8}>
          <TitleInput onChange={handleChange} value={data.title} />
        </Col>
        <Col span={8}>
          <MinInput onChange={handleChange} value={data.min} />
        </Col>
        <Col span={8}>
          <MaxInput onChange={handleChange} value={data.max} />
        </Col>
      </Row>
    </div>
  );
};

export default RangeInput;
