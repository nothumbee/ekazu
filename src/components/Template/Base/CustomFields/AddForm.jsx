import React from "react";
import { Button, Row, Col } from "antd";

const CustomFieldAddForm = ({ handleSubmit }) => {
  return (
    <Row gutter={16} className="customFieldsBar">
      <Col xs={{ span: 5 }} lg={{ span: 6 }}>
        <Button
          type="primary"
          onClick={event => handleSubmit(event, "symptoms")}
        >
          Přidej text input
        </Button>
      </Col>
      <Col xs={{ span: 5 }} lg={{ span: 6 }}>
        <Button type="primary" onClick={event => handleSubmit(event, "exams")}>
          Přidej exam input
        </Button>
      </Col>
      <Col xs={{ span: 5 }} lg={{ span: 6 }}>
        <Button type="primary" onClick={event => handleSubmit(event, "ranges")}>
          Přidej range input
        </Button>
      </Col>
    </Row>
  );
};

export default CustomFieldAddForm;
