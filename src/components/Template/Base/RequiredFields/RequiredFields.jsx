import React from 'react';
import { Row, Col, Input } from 'antd';
import CustomNumberInput from '../Inputs/Helpers/CustomNumberInput';

const REQUIRED_FIELDS = [
  {
    name: 'minBonus',
    title: 'minBonus',
  },
  {
    name: 'maxMalus',
    title: 'maxMalus',
  },
  {
    name: 'maxPrice',
    title: 'maxPrice',
  },
];

const RequiredFields = ({ data = {} }) => (
  <Row gutter={16}>
    <Input.Group>
      {REQUIRED_FIELDS.map((field, index) => (
        <Col span={8} key={index}>
          <CustomNumberInput name={field.name} value={data[field.name]}>
            {field.name}
          </CustomNumberInput>
        </Col>
      ))}
    </Input.Group>
  </Row>
);

export default RequiredFields;
