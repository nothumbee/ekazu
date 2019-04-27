import React from 'react';
import { REQUIRED_FIELDS } from '../../../../../constants/fields';
import { Row, Col } from 'antd';

const RequiredFields = ({ onChange, data }) => {
  return (
    <Row gutter={16}>
      {REQUIRED_FIELDS.map((field, index) => (
        <Col span={8} key={index}>
          {field.title}
          <input
            onChange={onChange}
            name={field.name}
            type={field.type}
            value={data[field.name]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default RequiredFields;
