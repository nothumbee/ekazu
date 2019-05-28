import React from "react";
import { Button, Row, Col, Card } from "antd";

const CustomFieldAddForm = ({ handleSubmit }) => {
  return (
    <Row className="customFieldsBar">
      <Col span={8}>
        <Button
          type="primary"
          onClick={event => handleSubmit(event, "symptoms")}
        >
          Přidej text input
        </Button>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={event => handleSubmit(event, "exams")}>
          Přidej exam input
        </Button>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={event => handleSubmit(event, "ranges")}>
          Přidej range input
        </Button>
      </Col>
    </Row>
  );
};

export default CustomFieldAddForm;
