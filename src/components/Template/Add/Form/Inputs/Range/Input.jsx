import React, { useState } from 'react';
import { TitleInput, MinInput, MaxInput } from '../helpers';
import { Row, Col } from 'antd';

const RangeInput = ({ onChange, id }) => {
  const [range, setRange] = useState({});
  // input onchange -> store the value in higher component > send to parent comp
  const handleChange = event => {
    const { name, value } = event.target;
    const newRange = { ...range, [name]: value };

    setRange(newRange);
    onChange(id, newRange, 'ranges');
    // and send to onChange handler with id of group and save to state
  };

  return (
    <div className="range">
      <h3>Přidat rozmezí</h3>

      <Row gutter={16}>
        <Col span={8}>
          <TitleInput onChange={handleChange} />
        </Col>
        <Col span={8}>
          <MinInput onChange={handleChange} />
        </Col>
        <Col span={8}>
          <MaxInput onChange={handleChange} />
        </Col>
      </Row>
    </div>
  );
};

export default RangeInput;
