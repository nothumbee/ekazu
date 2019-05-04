import React from 'react';
import { Row, Col } from 'antd';
import { CustomNumberInput } from '../Inputs/helpers';

const REQUIRED_FIELDS = [
  {
    name: 'minBonus',
    title: 'minBonus'
  },
  {
    name: 'maxMalus',
    title: 'maxMalus'
  },
  {
    name: 'maxPrice',
    title: 'maxPrice'
  }
];

const RequiredFields = ({ onChange, data = {} }) => {
  return (
    <Row gutter={16}>
      {REQUIRED_FIELDS.map((field, index) => (
        <Col span={8} key={index}>
          {field.name}
          <CustomNumberInput
            onChange={onChange}
            name={field.name}
            value={data[field.name]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default RequiredFields;
