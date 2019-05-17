import React from 'react';
import { Button } from 'antd';

const CustomFieldAddForm = ({ handleSubmit }) => {
  return (
    <div className="customFieldsBar">
      <Button type="primary" onClick={event => handleSubmit(event, 'symptoms')}>
        Přidej text input
      </Button>
      <Button type="primary" onClick={event => handleSubmit(event, 'exams')}>
        Přidej exam input
      </Button>
      <Button type="primary" onClick={event => handleSubmit(event, 'ranges')}>
        Přidej range input
      </Button>
    </div>
  );
};

export default CustomFieldAddForm;
