import React from 'react';
import { Button, Row, Col } from 'antd';

const CustomFieldAddForm = ({ handleSubmit, isGroup, onlyRanges }) => {
  if (onlyRanges && isGroup) {
    return (
      <Row className="customFieldsBar">
        <Col span={6}>
          <Button
            type="primary"
            onClick={(event) => handleSubmit(event, 'ranges')}
          >
            Přidej číselné rozmezí
          </Button>
        </Col>
      </Row>
    );
  }
  if (isGroup && !onlyRanges) {
    return (
      <Row className="customFieldsBar">
        <Col span={6}>
          <Button
            type="primary"
            onClick={(event) => handleSubmit(event, 'symptoms')}
          >
            Přidej textové pole
          </Button>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            onClick={(event) => handleSubmit(event, 'exams')}
          >
            Přidej obrázky
          </Button>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            onClick={(event) => handleSubmit(event, 'ranges')}
          >
            Přidej číselné rozmezí
          </Button>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="customFieldsBar">
      <Col span={8}>
        <Button
          type="primary"
          onClick={(event) => handleSubmit(event, 'symptoms')}
        >
          Přidej textové pole
        </Button>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={(event) => handleSubmit(event, 'exams')}>
          Přidej obrázky
        </Button>
      </Col>
      <Col span={8}>
        <Button type="primary" onClick={(event) => handleSubmit(event, 'ranges')}>
          Přidej číselné rozmezí
        </Button>
      </Col>
      <Col span={12}>
        <Button type="primary" onClick={(event) => handleSubmit(event, 'groups')}>
          Přidej skupinu
        </Button>
      </Col>
      <Col span={12}>
        <Button
          type="primary"
          onClick={(event) => handleSubmit(event, 'partials')}
        >
          Přidej parciální vyšetření
        </Button>
      </Col>
    </Row>
  );
};

export default CustomFieldAddForm;
