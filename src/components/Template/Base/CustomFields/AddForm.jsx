import React from "react";
import { Button, Row, Col } from "antd";

const CustomFieldAddForm = ({ handleSubmit }) => {
  return (
    <Row className="customFieldsBar">
      <Col span={8}>
        <Button
          type="primary"
          onClick={event => handleSubmit(event, "symptoms")}
        >
          Přidej textové pole
        </Button>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={event => handleSubmit(event, "exams")}>
          Přidej vyšetření s obrázkem
        </Button>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={event => handleSubmit(event, "ranges")}>
          Přidej vyšetření číselným rozmezím
        </Button>
      </Col>
    </Row>
  );
};

export default CustomFieldAddForm;
