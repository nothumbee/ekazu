import React from 'react';
import { Button, Row, Col } from 'antd';

const GroupAddButton = ({ handleClick, isGroup, onlyRanges }) => (
  <Row className="customFieldsBar">
    <Col span={24}>
      <Button
        type="primary"
        onClick={(event) => handleClick(event, 'groups')}
      >
          Přidej skupinu
      </Button>
    </Col>
  </Row>
);


export default GroupAddButton;
